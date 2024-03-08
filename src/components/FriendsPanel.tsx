import React, { FunctionComponent } from 'react';

import {
  CellButton,
  Group,
  Panel,
  PanelHeader,
  SimpleCell,
} from '@vkontakte/vkui';

import { IGroup } from '../App';
import { Icon24UserOutline } from '@vkontakte/icons';

interface FriendsPanelProps {
  id: string;
  selectedGroup: IGroup;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const FriendsPanel: FunctionComponent<FriendsPanelProps> = ({
  id,
  selectedGroup,
  setActivePanel,
}) => {
  const { friends } = selectedGroup;

  return (
    <Panel id={id}>
      <PanelHeader style={{ textAlign: 'center' }}>Друзья в группе</PanelHeader>
      <Group>
        {friends &&
          friends.map((friend, i) => {
            return (
              <SimpleCell
                key={i}
                before={<Icon24UserOutline />}
              >
                {`${friend.first_name} ${friend.last_name}`}
              </SimpleCell>
            );
          })}

        <CellButton onClick={() => setActivePanel('groups')}>
          К списку групп
        </CellButton>
      </Group>
    </Panel>
  );
};

export default FriendsPanel;
