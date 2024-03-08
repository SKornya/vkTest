import React, { FunctionComponent } from 'react';

import { Avatar, Counter, Group, Header, SimpleCell } from '@vkontakte/vkui';
import {
  Icon24FavoriteOutline,
  Icon24LockOpenOutline,
  Icon24LockOutline,
  Icon28UserOutline,
} from '@vkontakte/icons';

import { IGroup } from '../App';

interface GroupCardProps {
  group: IGroup;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
  setSelectedGroupId: React.Dispatch<React.SetStateAction<number | null>>;
}

const GroupCard: FunctionComponent<GroupCardProps> = ({
  group,
  setActivePanel,
  setSelectedGroupId,
}) => {
  const { id, name, closed, avatar_color, members_count, friends } = group;

  return (
    <Group header={<Header mode="primary">{name}</Header>}>
      {avatar_color && (
        <SimpleCell
          expandable="auto"
          before={
            <Avatar size={100} style={{ backgroundColor: `${avatar_color}` }} />
          }
        />
      )}

      {closed ? (
        <SimpleCell expandable="auto" before={<Icon24LockOutline />}>
          Закрытая группа
        </SimpleCell>
      ) : (
        <SimpleCell expandable="auto" before={<Icon24LockOpenOutline />}>
          Открытая группа
        </SimpleCell>
      )}
      <SimpleCell
        expandable="auto"
        before={<Icon28UserOutline />}
        indicator={<Counter>{members_count}</Counter>}
      >
        Участники
      </SimpleCell>

      {friends && (
        <SimpleCell
          expandable="auto"
          before={<Icon24FavoriteOutline />}
          indicator={<Counter>{friends.length}</Counter>}
          onClick={() => {
            setSelectedGroupId(id);
            setActivePanel('friends');
          }}
        >
          Друзья в группе
        </SimpleCell>
      )}
    </Group>
  );
};

export default GroupCard;
