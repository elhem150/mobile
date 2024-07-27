import React from 'react';

import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useWorkType } from '../hooks/use-work-type';

export function ChooseWorkType() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    workTypeData,
    isError,
    isLoading,
  } = useWorkType();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          <View className="flex-1">
            {isLoading || workTypeData?.length === 0 ? (
              <EmptyList isLoading={isLoading} />
            ) : (
              <View className="gap-4">
                {workTypeData?.map((cardData, index) => (
                  <ToggleCard
                    key={index}
                    className="h-16 w-full !items-start rounded-lg"
                    title={cardData.header}
                    description={cardData.description}
                    name="workType"
                    control={control}
                    value={cardData.id}
                  />
                ))}
              </View>
            )}
            {error && (
              <Text className="text-sm text-error dark:text-error" tx={error} />
            )}
          </View>

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
