import { CustomSelectOption, FormItem, Select } from '@vkontakte/vkui';
import { ChangeEvent, FunctionComponent } from 'react';

interface FilterProps {
  id: string;
  heading: string;
  placeholder: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: (event: ChangeEvent<HTMLSelectElement>, id: string) => void;
}

const Filter: FunctionComponent<FilterProps> = ({
  id,
  heading,
  placeholder,
  options,
  onChange,
}) => {
  return (
    <FormItem top={heading} htmlFor={id}>
      <Select
        id={id}
        placeholder={placeholder}
        defaultValue="all"
        onChange={(e) => onChange(e, id)}
        options={options}
        renderOption={({ option, ...restProps }) => {
          return <CustomSelectOption {...restProps} key={option.value} />;
        }}
      />
    </FormItem>
  );
};

export default Filter;
