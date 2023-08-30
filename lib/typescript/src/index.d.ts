import { HKAuthorizationRequestStatus, HKAuthorizationStatus, HKBiologicalSex, HKBloodType, HKFitzpatrickSkinType, HKWheelchairUse } from './native-types';
import type { QueryCategorySamplesFn } from './utils/queryCategorySamples';
import type { QueryQuantitySamplesFn } from './utils/queryQuantitySamples';
export * from './types';
declare const _default: {
    authorizationStatusFor: (type: import("./native-types").HealthkitReadAuthorization) => Promise<HKAuthorizationStatus>;
    availableQuantityTypes: (majorVersionIOS?: number) => import("./native-types").HKQuantityTypeIdentifier[];
    isHealthDataAvailable: () => Promise<boolean>;
    isProtectedDataAvailable: () => Promise<boolean>;
    canAccessProtectedData: () => Promise<boolean>;
    disableAllBackgroundDelivery: () => Promise<boolean>;
    disableBackgroundDelivery: (typeIdentifier: import("./native-types").HKSampleTypeIdentifier) => Promise<boolean>;
    enableBackgroundDelivery: (typeIdentifier: import("./native-types").HKSampleTypeIdentifier, updateFrequency: import("./native-types").HKUpdateFrequency) => Promise<boolean>;
    getBiologicalSex: () => Promise<HKBiologicalSex>;
    getFitzpatrickSkinType: () => Promise<HKFitzpatrickSkinType>;
    getWheelchairUse: () => Promise<HKWheelchairUse>;
    getBloodType: () => Promise<HKBloodType>;
    getDateOfBirth: () => Promise<Date>;
    getMostRecentQuantitySample: typeof import("./utils/getMostRecentQuantitySample").default;
    getMostRecentCategorySample: typeof import("./utils/getMostRecentCategorySample").default;
    getMostRecentWorkout: import("./utils/getMostRecentWorkout").GetMostRecentWorkoutFn;
    getWorkoutRoutes: (workoutUUID: string) => Promise<readonly import("./native-types").WorkoutRoute[]>;
    getPreferredUnit: import("./utils/getPreferredUnit").GetPreferredUnitFn;
    getPreferredUnits: import("./utils/getPreferredUnits").GetPreferredUnitsFn;
    getRequestStatusForAuthorization: (read: readonly import("./native-types").HealthkitReadAuthorization[], write?: readonly import("./native-types").HKSampleTypeIdentifier[]) => Promise<HKAuthorizationRequestStatus>;
    queryCategorySamples: QueryCategorySamplesFn;
    queryCategorySamplesWithAnchor: import("./utils/queryCategorySamplesWithAnchor").QueryCategorySamplesWithAnchorFn;
    queryCorrelationSamples: import("./utils/queryCorrelationSamples").QueryCorrelationSamplesFn;
    queryHeartbeatSeriesSamples: import("./utils/queryHeartbeatSeriesSamples").QueryHeartbeatSeriesSamplesFn;
    queryHeartbeatSeriesSamplesWithAnchor: import("./utils/queryHeartbeatSeriesSamplesWithAnchor").QueryHeartbeatSeriesSamplesFn;
    queryQuantitySamples: QueryQuantitySamplesFn;
    queryQuantitySamplesWithAnchor: import("./utils/queryQuantitySamplesWithAnchor").QueryQuantitySamplesWithAnchorFn;
    queryStatisticsForQuantity: typeof import("./utils/queryStatisticsForQuantity").default;
    queryWorkouts: typeof import("./utils/queryWorkouts").default;
    querySources: import("./utils/querySources").QuerySourcesFn;
    requestAuthorization: (read: readonly import("./native-types").HealthkitReadAuthorization[], write?: readonly import("./native-types").HKSampleTypeIdentifier[]) => Promise<boolean>;
    deleteQuantitySample: import("./utils/deleteQuantitySample").DeleteQuantitySampleFn;
    deleteSamples: import("./utils/deleteSamples").DeleteSamplesFn;
    saveCategorySample: typeof import("./utils/saveCategorySample").default;
    saveCorrelationSample: typeof import("./utils/saveCorrelationSample").default;
    saveQuantitySample: typeof import("./utils/saveQuantitySample").default;
    saveWorkoutSample: typeof import("./utils/saveWorkoutSample").default;
    subscribeToChanges: (identifier: import("./native-types").HKSampleTypeIdentifier, callback: () => void) => Promise<() => Promise<boolean>>;
    useMostRecentCategorySample: typeof import("./hooks/useMostRecentCategorySample").default;
    useMostRecentQuantitySample: typeof import("./hooks/useMostRecentQuantitySample").default;
    useMostRecentWorkout: typeof import("./hooks/useMostRecentWorkout").default;
    useSubscribeToChanges: typeof import("./hooks/useSubscribeToChanges").default;
    useIsHealthDataAvailable: () => boolean | null;
    useHealthkitAuthorization: (read: readonly import("./native-types").HealthkitReadAuthorization[], write?: readonly import("./native-types").HKSampleTypeIdentifier[] | undefined) => readonly [HKAuthorizationRequestStatus | null, () => Promise<HKAuthorizationRequestStatus>];
};
export default _default;
