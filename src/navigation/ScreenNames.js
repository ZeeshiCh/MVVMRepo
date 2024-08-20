import EmbyroTransferScreen from "../screens/appFlow/EmbyroTransferScreen/EmbyroTransferScreen";
import BeEmpoweredScreen from "../screens/appFlow/BeEmpoweredScreen/BeEmpoweredScreen";
import Pharmaceutical from "../screens/appFlow/Pharmaceutical/Pharmaceutical";
import ListOfMedicines from "../screens/appFlow/ListOfMedicines/ListOfMedicines";
import MedicationDose from "../screens/appFlow/MedicationDose/MedicationDose";
import Medications from "../screens/appFlow/Medications/Medications";
import ScanLabReport from "../screens/appFlow/ScanLabReport/ScanLabReport";
import LabReportResult from "../screens/appFlow/LabReportResult/LabReportResult";
import ScanUltrasound from "../screens/appFlow/ScanUltrasound/ScanUltrasound";
import ScanUltrasoundManually from "../screens/appFlow/ScanUltrasoundManually/ScanUltrasoundManually";
import UltrasoundResult from "../screens/appFlow/UltrasoundResult/UltrasoundResult";
import UltrasoundReport from "../screens/appFlow/UltrasoundReport/UltrasoundReport";
import ScanSpouseReport from "../screens/appFlow/ScanSpouseReport/ScanSpouseReport";
import SpouseReports from "../screens/appFlow/SpouseReports/SpouseReports";
import InformationScreen from "../screens/appFlow/InformationScreen/InformationScreen";
import StartPeriodScreen from "../screens/appFlow/StartPeriodScreen/StartPeriodScreen";
import StimulationScreen from "../screens/appFlow/StimulationScreen/StimulationScreen";
import TriggeringScreen from "../screens/appFlow/TriggeringScreen/TriggeringScreen";
import RetrivalScreen from "../screens/appFlow/RetrivalScreen/RetrivalScreen";
import EmbyroTransfer from "../screens/appFlow/EmbyroTransfer/EmbyroTransfer";
import PregnancyTestScreen from "../screens/appFlow/PregnancyTestScreen/PregnancyTestScreen";
import AppointmentsScreen from "../screens/appFlow/AppointmentsScreen/AppointmentsScreen";
import AddNoteScreen from "../screens/appFlow/AddNoteScreen/AddNoteScreen";
import SymptomsScreen from "../screens/appFlow/SymptomsScreen/SymptomsScreen";
import intimacyScreen from "../screens/appFlow/IntimacyScreen/IntimacyScreen";
import IntimacyScreen from "../screens/appFlow/IntimacyScreen/IntimacyScreen";
import MoodScreen from "../screens/appFlow/MoodScreen/MoodScreen";
import WeightScreen from "../screens/appFlow/WeightScreen/WeightScreen";
import PhysicalSymptomScreen from "../screens/appFlow/PhysicalSymptomScreen/PhysicalSymptomScreen";
import BaselBodyTempScreen from "../screens/appFlow/BaselBodyTempScreen/BaselBodyTempScreen";
import CervicalMuscus from "../screens/appFlow/CervicalMuscus/CervicalMuscus";

const ScreenNames = {
    Splash: 'Splash',
    LanguageSelection: 'LanguageSelection',
    Welcome: 'Welcome',
    SignUp: 'SignUp',
    ConfirmPassword: 'ConfirmPassword',
    Congratulation: 'Congratulation',
    Login: 'Login',
    ForgetUsername: 'ForgetUsername',
    ForgetPassword: 'ForgetPassword',
    ChangePassword: 'ChangePassword',
    Info1: 'Info1',
    Info2: 'Info2',
    Info3: 'Info3',
    Info4: 'Info4',
    Info5: 'Info5',
    Calender: 'Calender',
    Treatment: 'Treatment',
    YourInformation: 'YourInformation',
    UpdatePassword: 'UpdatePassword',
    IVFCalculator: 'IVFCalculator',
    IVFCycle1: 'IVFCycle1',
    IVFCycle1Questionare: 'IVFCycle1Questionare',
    IVFCycle2: 'IVFCycle2',
    IVFCycle2Questionare: 'IVFCycle2Questionare',
    IVFCycle3: 'IVFCycle3',
    IVFCycle3Questionare: 'IVFCycle3Questionare',
    CalculateResult: 'CalculateResult',
    HelpAndSupport: 'HelpAndSupport',
    Home: 'Home',
    Profile: 'Profile',
    ProfileInfo: 'ProfileInfo',
    ProfileDetail: 'ProfileDetail',
    HealthProfile: 'HealthProfile',
    HormonalPanel: 'HormonalPanel',
    MyCycle: 'MyCycle',
    PreviousCycle: 'PreviousCycle',
    EmbyroEgg: 'EmbyroEgg',
    EmbyroReport: 'EmbyroReport',
    CourseStartDate: 'CourseStartDate',
    CourseTreatmentType: 'CourseTreatmentType',
    ProtocolType: 'ProtocolType',
    MyPreviousCycles: 'MyPreviousCycles',
    PreviousCycleStartDate: 'PreviousCycleStartDate',
    PreviousCycleEndDate: 'PreviousCycleEndDate',
    AddNewCycle: 'AddNewCycle',
    MedicationReminder: 'MedicationReminder',
    PregnancyTestScan: 'PregnancyTestScan',
    PregnancyCheck: 'PregnancyCheck',
    CongratulationTest: 'CongratulationTest',
    TryAgain: 'TryAgain',
    TestsScreen: 'TestsScreen',
    EnergizingScreen: 'EnergizingScreen',
    RecoveryScreen: 'RecoveryScreen',
    TransformationScreen: 'TransformationScreen',
    WaitForWeeksScreen: 'WaitForWeeksScreen',
    DrugStimulationScreen: 'DrugStimulationScreen',
    EggRetrivalScreen: 'EggRetrivalScreen',
    EmbyroTransferScreen: 'EmbyroTransferScreen',
    BeEmpoweredScreen: 'BeEmpoweredScreen',
    Pharmaceutical: 'Pharmaceutical',
    ListOfMedicines: 'ListOfMedicines',
    MedicationDose: 'MedicationDose',
    Medications: 'Medications',
    ScanLabReport: 'ScanLabReport',
    LabReportResult: 'LabReportResult',
    ScanUltrasound: 'ScanUltrasound',
    ScanUltrasoundManually: 'ScanUltrasoundManually',
    UltrasoundResult: 'UltrasoundResult',
    UltrasoundReport: 'UltrasoundReport',
    ScanSpouseReport: 'ScanSpouseReport',
    SpouseReports: 'SpouseReports',
    InformationScreen: 'InformationScreen',
    StartPeriodScreen: 'StartPeriodScreen',
    StimulationScreen: 'StimulationScreen',
    TriggeringScreen: 'TriggeringScreen',
    RetrivalScreen: 'RetrivalScreen',
    EmbyroTransfer: 'EmbyroTransfer',
    PregnancyTestScreen: 'PregnancyTestScreen',
    AppointmentsScreen: 'AppointmentsScreen',
    AddNoteScreen: 'AddNoteScreen',
    SymptomsScreen: 'SymptomsScreen',
    IntimacyScreen: 'IntimacyScreen',
    MoodScreen: 'MoodScreen',
    WeightScreen: 'WeightScreen',
    PhysicalSymptomScreen: 'PhysicalSymptomScreen',
    BaselBodyTempScreen: 'BaselBodyTempScreen',
    CervicalMuscus: 'CervicalMuscus',
    BottomTabNavigator: 'BottomTabNavigator',
  };

  export default ScreenNames;
