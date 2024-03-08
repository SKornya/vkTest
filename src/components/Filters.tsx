import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { Group } from '@vkontakte/vkui';

import { IGroup } from '../App';
import Filter from './Filter';

interface FiltersProps {
  groups: IGroup[];
  setFilteredGroups: React.Dispatch<React.SetStateAction<IGroup[]>>;
}

interface IFilterOptions {
  status: string;
  color: string;
  friends: string;
}

const getFilteredGroups = (
  options: IFilterOptions,
  groups: IGroup[]
): IGroup[] => {
  const { status, color, friends } = options;

  return groups.filter((group) => {
    let statusFilter: boolean = true;
    let colorFilter: boolean = true;
    let friendsFilter: boolean = true;

    if (status !== 'all') {
      statusFilter = status === 'closed' ? group.closed : !group.closed;
    }

    if (color !== 'all') {
      colorFilter =
        color === 'transparent'
          ? group.avatar_color === undefined
          : group.avatar_color === color;
    }

    if (friends !== 'all') {
      friendsFilter = friends === 'yes' ? !!group.friends : !group.friends;
    }

    return statusFilter && colorFilter && friendsFilter;
  });
};

const getUniqueColors = (groups: IGroup[]): Array<string | undefined> => {
  return [...new Set(groups.map((group) => group.avatar_color))];
};

const Filters: FunctionComponent<FiltersProps> = ({
  groups,
  setFilteredGroups,
}) => {
  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
    status: 'all',
    color: 'all',
    friends: 'all',
  });

  useEffect(() => {
    const filteredGroups = getFilteredGroups(filterOptions, groups);
    setFilteredGroups(filteredGroups);
  }, [filterOptions]);

  const selectChangeHandle = (
    event: ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const value = event.target.value;
    setFilterOptions({ ...filterOptions, [id]: value });
  };

  return (
    <Group>
      <Filter
        id="status"
        heading="Статус группы"
        placeholder="Выберите открытые/закрытые группы"
        onChange={selectChangeHandle}
        options={[
          { label: 'Все', value: 'all' },
          { label: 'Открытые', value: 'opened' },
          { label: 'Закрытые', value: 'closed' },
        ]}
      />

      <Filter
        id="color"
        heading="Цвет аватара"
        placeholder="Выберите цвет аватара группы"
        onChange={selectChangeHandle}
        options={[
          { label: 'Все', value: 'all' },
          ...getUniqueColors(groups).map((color: string | undefined) => ({
            label: color || 'Аватар отсутствует',
            value: color || 'transparent',
          })),
        ]}
      />

      <Filter
        id="friends"
        heading="Наличие друзей в группе"
        placeholder="Выберите наличие друзей в группе"
        onChange={selectChangeHandle}
        options={[
          { label: 'Все', value: 'all' },
          { label: 'Есть', value: 'yes' },
          { label: 'Нет', value: 'no' },
        ]}
      />
    </Group>
  );
};

export default Filters;
