import React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Text, TouchableOpacity } from 'react-native';

import useImageUrl from '../hooks/use-image-url';
import { Image } from './image';
interface TagProps<T extends FieldValues> {
  label: string;
  id?: number;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
  multi?: boolean;
  imageIcon?: string;
  className?: string;
  obligation?: boolean;
}

export const Tag = <T extends FieldValues>({
  id,
  label,
  name,
  control,
  rules,
  multi = false,
  imageIcon,
  obligation = false,
  className,
}: TagProps<T>) => {
  const { field } = useController({ name, control, rules });

  const handlePress = () => {
    if (field.value === label && !obligation) field.onChange('');
    else field.onChange(label);
  };
  const handleChangeMulti = () => {
    if (field.value.includes(id)) {
      field.onChange(
        field.value.filter((tagSelected: number) => tagSelected !== id)
      );
    } else {
      field.onChange([...field.value, id]);
    }
  };
  const isSelected = multi ? field.value.includes(id) : field.value === label;

  const imageIconUrl = useImageUrl(imageIcon);

  return (
    <TouchableOpacity
      onPress={multi ? handleChangeMulti : handlePress}
      className={`${className} m-1 min-w-min rounded-full border border-color-border p-3
        ${isSelected ? 'bg-primary' : 'bg-white'}`}
    >
      {imageIcon && (
        <Image
          className="mr-2 h-full w-10 overflow-hidden"
          source={{ uri: imageIconUrl }}
          contentFit="contain"
        />
      )}
      <Text
        className={`text-center ${
          isSelected ? 'text-white' : 'text-primary-txt'
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
