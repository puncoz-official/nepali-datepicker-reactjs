import { ClassName } from './Common.ts';
export declare enum Theme {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum Language {
    ENGLISH = "en",
    NEPALI = "ne"
}
export declare enum DateType {
    BS = "bs",
    AD = "ad"
}
export interface DayInfo {
    day: number;
    month: number;
    year: number;
    weekDay: number;
    dateString: string;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
}
export interface Events {
    onChange: (date: string) => void;
    onSelect: (dayInfo: DayInfo) => void;
}
export interface Modifiers {
    isHoliday: (dayInfo: DayInfo) => boolean;
    isDisabled: (dayInfo: DayInfo) => boolean;
    isWeekend: (weekDay: number) => boolean;
}
export interface Locale {
    calendar: Language;
    value: Language;
}
export interface ClassNames {
    wrapper?: ClassName;
    input?: ClassName;
    calendar?: ClassName;
    calendarHeader?: ClassName;
    calendarBody?: ClassName;
    calendarFooter?: ClassName;
    navBtn?: ClassName;
    actionBtn?: ClassName;
    actionBtnDisabled?: ClassName;
    navBtnIcon?: ClassName;
    previousBtn?: ClassName;
    nextBtn?: ClassName;
    dropDownWrapper?: ClassName;
    dropDown?: ClassName;
    dropDownItem?: ClassName;
    dropDownItemActive?: ClassName;
    yearMonthPicker?: ClassName;
    yearPicker?: ClassName;
    yearPickerDropDown?: ClassName;
    monthPicker?: ClassName;
    monthPickerDropDown?: ClassName;
    weekDaysTr?: ClassName;
    weekDaysTd?: ClassName;
    weekDaysTdWeekend?: ClassName;
    dayPickerTr?: ClassName;
    dayPickerTd?: ClassName;
    dayPickerDay?: ClassName;
    dayPickerDayWeekend?: ClassName;
    dayPickerDayHoliday?: ClassName;
    dayPickerDayDisabled?: ClassName;
    dayPickerDaySelected?: ClassName;
    dayPickerDayOtherMonth?: ClassName;
    dayPickerToday?: ClassName;
    todayBtn?: ClassName;
    todayBtnIcon?: ClassName;
    todayBtnText?: ClassName;
    clearBtn?: ClassName;
    clearBtnIcon?: ClassName;
    clearBtnText?: ClassName;
}
export interface Options {
    classNames: ClassNames;
    theme: Theme;
    colors: {
        primary: string;
        secondary: string;
    };
    dateSeparator: string;
    closeOnSelect: boolean;
}
export interface CalendarData {
    minBsYear: number;
    maxBsYear: number;
    bsMonthMaxDays: number[][];
    bsMonthCalculatedData: number[][];
}
export interface SplitDate {
    year: number;
    month: number;
    day: number;
}
export interface ParsedDate {
    bsYear: number;
    bsMonth: number;
    bsDay: number;
    weekDay: number;
    adDate: Date;
    numberOfDaysInBsMonth: number;
    firstAdDayInBsMonth: Date;
    dateString: string;
}
export interface DateObject {
    calendar?: ParsedDate;
    selected?: ParsedDate;
}
export interface IData {
    isCalendarOpen: boolean;
    calendarData: CalendarData;
    events: Events;
    modifiers: Modifiers;
    locale: Locale;
    options: Options;
    date: DateObject;
}
export declare enum Types {
    SET_CALENDAR_OPEN = "SET_CALENDAR_OPEN",
    SET_CLASSES = "SET_CLASSES",
    SET_THEME = "SET_THEME",
    SET_EVENTS = "SET_EVENTS",
    SET_MODIFIERS = "SET_MODIFIERS",
    SET_LOCALE = "SET_LOCALE",
    SET_COLORS = "SET_COLORS",
    SET_SEPARATOR = "SET_SEPARATOR",
    SET_CLOSE_ON_SELECT = "SET_CLOSE_ON_SELECT",
    SET_OPTIONS = "SET_OPTIONS",
    SET_CALENDAR_DATE = "SET_CALENDAR_DATE",
    SET_SELECTED_DATE = "SET_SELECTED_DATE"
}
export type DataAction = {
    type: Types.SET_CALENDAR_OPEN;
    isOpen: boolean;
} | {
    type: Types.SET_CLASSES;
    classNames: ClassNames;
} | {
    type: Types.SET_THEME;
    theme: Theme;
} | {
    type: Types.SET_EVENTS;
    events: Events;
} | {
    type: Types.SET_MODIFIERS;
    modifiers: Modifiers;
} | {
    type: Types.SET_LOCALE;
    locale: Locale;
} | {
    type: Types.SET_COLORS;
    colors: Options["colors"];
} | {
    type: Types.SET_SEPARATOR;
    separator: Options["dateSeparator"];
} | {
    type: Types.SET_CLOSE_ON_SELECT;
    closeOnSelect: Options["closeOnSelect"];
} | {
    type: Types.SET_OPTIONS;
    options: Options;
} | {
    type: Types.SET_CALENDAR_DATE;
    date?: ParsedDate;
} | {
    type: Types.SET_SELECTED_DATE;
    date?: ParsedDate;
};
