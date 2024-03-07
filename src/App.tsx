import {
  Counter,
  Group,
  Header,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  SimpleCell,
  View,
} from '@vkontakte/vkui';
import {
  Icon12User,
  Icon28PaletteOutline,
  Icon28SettingsOutline,
  Icon28UserOutline,
} from '@vkontakte/icons';

import { useState } from 'react';

function App() {
  const [activePanel, setActivePanel] = useState('list');

  return (
    <>
      <View activePanel="filters">
        <Panel id="filters">
          <PanelHeader>Filters</PanelHeader>
          <Group>
            <SimpleCell>Filters</SimpleCell>
            <SimpleCell>Filters</SimpleCell>
            <SimpleCell>Filters</SimpleCell>
          </Group>
        </Panel>
      </View>

      <View activePanel={activePanel}>
        <Panel id="list">
          <PanelHeader style={{ textAlign: 'center' }}>Groups</PanelHeader>
          <Group header={<Header mode="secondary">Меню</Header>}>
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

          <Group header={<Header mode="primary">Меню</Header>}>
            <SimpleCell
              onClick={() => setActivePanel('friends')}
              expandable="auto"
              before={<Icon28UserOutline />}
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
        </Panel>
        <Panel id="friends">
          <PanelHeader
            before={<PanelHeaderBack onClick={() => setActivePanel('list')} />}
          >
            Friends
          </PanelHeader>
          <Group>
            <SimpleCell before={<Icon28UserOutline />}>ASD lofjjk</SimpleCell>

            <SimpleCell before={<Icon28UserOutline />}>ASD lofjjk</SimpleCell>
          </Group>
        </Panel>
      </View>
    </>
  );
}

export default App;
