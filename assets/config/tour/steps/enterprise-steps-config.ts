import { EnterpriseTourStep } from 'src/app/models/tour/tour-step-enums/enterprise-tour-step';
import { TourStepSetting } from 'src/app/models/tour/tour-step-settings';

export class EnterpriseStepsConfig {

  public static CREATE_CONFIGURATION_INSTANCE = [
    {
      id: EnterpriseTourStep.CREATE_CONFIGURATION_INSTANCE,
      translateKey: 'TOUR.MESSAGES.SOLUTIONS_DEVELOPER.CREATE_CONFIGURATION_INSTANCE',
      anchorSettings: {
        element: '#create-instance-btn',
        on: 'bottom',
      },
      offset: {
        parallel: 20,
        perpendicular: 120,
      },
      overlay: {
        radius: 4,
        padding: 10,
      },
    }
  ] as TourStepSetting[];

  public static CREATE_CONFIGURATION = [
    {
      id: EnterpriseTourStep.CREATE_CONFIGURATION,
      translateKey: 'TOUR.MESSAGES.SOLUTIONS_DEVELOPER.CREATE_CONFIGURATION',
      anchorSettings: {
        element: '#create-configuration-btn',
        on: 'bottom',
      },
      offset: {
        parallel: 20,
        perpendicular: 120,
      },
      overlay: {
        radius: 4,
        padding: 10,
      },
    }
  ] as TourStepSetting[];

  public static DEFINE_WORKFLOW = [
    {
      id: EnterpriseTourStep.DEFINE_WORKFLOW,
      translateKey: 'TOUR.MESSAGES.SOLUTIONS_DEVELOPER.DEFINE_WORKFLOW',
      anchorSettings: {
        element: '#define-workflow-btn',
        on: 'bottom',
      },
      offset: {
        parallel: 20,
        perpendicular: 120,
      },
      overlay: {
        radius: 4,
        padding: 10,
      },
    }
  ] as TourStepSetting[];
}
