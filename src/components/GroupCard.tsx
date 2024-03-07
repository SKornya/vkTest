import { Icon28PaletteOutline, Icon28SettingsOutline, Icon28UserOutline } from "@vkontakte/icons";
import { Counter, Group, Header, SimpleCell } from "@vkontakte/vkui";
import React, { FunctionComponent } from "react";

interface User {
  first_name: string;
  last_name: string;
}

interface Group {
  "id": number,
  "name": string,
  "closed": boolean,
  "avatar_color"?: string,
  "members_count": number,
  "friends"?: User[]
}

interface GroupCardProps {
  group: Group;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Groupcard: FunctionComponent<GroupCardProps> = ({ group, setActivePanel }) => {

  const { id, name, closed, avatar_color, members_count, friends } = group;

  return (
    <Group header={<Header mode="primary">{name}</Header>}>
            <SimpleCell
              onClick={() => setActivePanel('friends')}
              expandable="auto"
              before={<Icon28UserOutline />}
              indicator={<Counter>10</Counter>}
            >
              Аккаунт
            </SimpleCell>
            <SimpleCell
              onClick={() => setActivePanel('friends')}
              expandable="auto"
              before={<Icon28PaletteOutline />}
            >
              Внешний вид
            </SimpleCell>
            <SimpleCell
              onClick={() => setActivePanel('friends')}
              expandable="auto"
              before={<Icon28SettingsOutline />}
            >
              Основные
            </SimpleCell>
          </Group>
  );
};

export default Groupcard;
