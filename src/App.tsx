import { Group, Panel, PanelHeader, View } from '@vkontakte/vkui';

import groups from '../groups.js';

import { useEffect, useState } from 'react';
import GroupCard from './components/GroupCard.js';
import FriendsPanel from './components/FriendsPanel.js';
import Filters from './components/Filters.js';

interface GetGroupsResponse {
  result: 1 | 0;
  data?: IGroup[];
}

export interface IGroup {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

interface User {
  first_name: string;
  last_name: string;
}

const fetchData = async (): Promise<GetGroupsResponse> => {
  let data: GetGroupsResponse = { result: 0 };

  try {
    data = {
      result: 1,
      data: groups,
    };

    if (!data.result) {
      throw Error('Result is 0');
    }

    if (!data.data) {
      throw Error('No data');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
  }

  return data;
};

function App() {
  const [activePanel, setActivePanel] = useState('groups');

  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<IGroup[]>([]);

  const [error, setError] = useState<string>('');

  const selectedGroup = groups.find((group) => group.id === selectedGroupId);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const data = await fetchData();
        if (data.data) {
          setGroups(data.data);
          setFilteredGroups(data.data);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };

    const timeoutId: number = setTimeout(() => {
      getGroups();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <View activePanel={activePanel}>
      <Panel id="groups">
        <PanelHeader style={{ textAlign: 'center' }}>Groups</PanelHeader>
        {!error ? (
          <Filters groups={groups} setFilteredGroups={setFilteredGroups} />
        ) : (
          <Group header={error} />
        )}

        {filteredGroups.length
          ? filteredGroups.map((group: IGroup) => {
              const { id } = group;
              return (
                <GroupCard
                  key={id}
                  group={group}
                  setSelectedGroupId={setSelectedGroupId}
                  setActivePanel={setActivePanel}
                />
              );
            })
          : null}
      </Panel>

      <FriendsPanel
        id="friends"
        setActivePanel={setActivePanel}
        selectedGroup={selectedGroup as IGroup}
      />
    </View>
  );
}

export default App;
