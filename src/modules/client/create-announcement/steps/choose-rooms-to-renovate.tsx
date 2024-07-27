import React from 'react';

import type { resultType } from '@/api/client';
import { StepButtons } from '@/modules/shared';
import { Counter, EmptyList, ErrorData, View } from '@/shared/components';

import { useRoomsToRenovate } from '../hooks';

export function ChooseRoomsToRenovate() {
  const {
    onRollBack,
    handleSubmit,
    control,
    onSubmit,
    RenovateData,
    isError,
    isLoading,
    isFetchedAfterMount,
  } = useRoomsToRenovate();

  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 items-center justify-between">
          {isLoading || RenovateData?.length === 0 ? (
            <EmptyList isLoading={isLoading || isFetchedAfterMount} />
          ) : (
            <View className="gap-4">
              {RenovateData?.map((item: resultType, index: number) => (
                <Counter
                  key={index}
                  title={item.label}
                  image={item.icon}
                  name="piecesRenovate"
                  control={control}
                  id={item.id}
                />
              ))}
            </View>
          )}

          <StepButtons
            previous={{
              handlePreviousStep: onRollBack,
              label: 'signup.retour',
            }}
            next={{
              handleSubmit: handleSubmit(onSubmit),
              label: 'signup.suivant',
            }}
          />
        </View>
      )}
    </View>
  );
}
