import {
  Group,
  Header,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  SimpleCell,
  View,
} from '@vkontakte/vkui';
import { Icon28PaletteOutline, Icon28SettingsOutline, Icon28UserOutline } from '@vkontakte/icons';

import { useState } from 'react';

function App() {
  const [activePanel, setActivePanel] = useState('list');

  return (
    <View activePanel={activePanel}>
      <Panel id="list">
        <PanelHeader>SimpleCell</PanelHeader>
        <Group header={<Header mode="secondary">Меню</Header>}>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            before={<Icon28UserOutline />}
          >
            Аккаунт
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            before={<Icon28PaletteOutline />}
          >
            Внешний вид
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            before={<Icon28SettingsOutline />}
          >
            Основные
          </SimpleCell>
        </Group>
      </Panel>
      <Panel id="nothing">
        <PanelHeader
          before={<PanelHeaderBack onClick={() => setActivePanel('list')} />}
        >
          Ничего
        </PanelHeader>
        <Placeholder>Тут ничего нет</Placeholder>
      </Panel>
    </View>
  );
}

export default App;
