import { RefObject } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IInputState from '@shared/interfaces/States/IInputState';
import ISelectState from '@shared/interfaces/States/ISelectState';
import ICheckBoxState from '@shared/interfaces/States/ICheckBoxState';

interface FormState { 
    themeInput: IInputState;
    venueInput: IInputState;
    budgetSelect: ISelectState;
    serviceSelect: ISelectState;
    programsSelect: ISelectState;
    otherVendors: ICheckBoxState;
    nameInput: IInputState;
    phoneInput: IInputState;
    emailInput: IInputState;
    childrenSelect: ISelectState;
    dateInput: IInputState;
    timeInput: IInputState;
    specialInput: IInputState;
    placeParty: ICheckBoxState;
    otherDecors: ICheckBoxState;
};

const initialState: FormState = { 
    themeInput: {
        value: '', id: 'theme-input', text: 'Theme of the event', smile: '📃'
    },
    venueInput: {
        value: '', id: 'venue-input', text: 'Venue', smile: '📍'
    },
    budgetSelect: {
        value: '', id: 'budget-select', text: 'Budget', smile: '💲'
    },
    serviceSelect: {
        value: '', id: 'service-select', text: 'Service', smile: '❓'
    },
    programsSelect: {
        value: '', id: 'programs-select', text: 'Programs', smile: '📋'
    },
    otherVendors: {
        value: '', text: 'Other vendors', smile: '✔️'
    },
    nameInput: {
        value: '', id: 'name-input', text: 'Name', smile: '🧑'
    },
    phoneInput: {
        value: '', id: 'phone-input', text: 'Phone', smile: '📞'
    },
    emailInput: {
        value: '', id: 'email-input', text: 'E-Mail', smile: '📧'
    },
    childrenSelect: {
        value: '', id: 'children-select', text: 'Number of children', smile: '🧒'
    },
    dateInput: {
        value: '', id: 'date-input', text: 'Date', smile: '📅'
    },
    timeInput: {
        value: '', id: 'time-input', text: 'Time', smile: '⏱️'
    },
    specialInput: {
        value: '', id: 'special-input', text: 'Special Requests', smile: '❔'
    },
    placeParty: {
        value: '', text: 'Place', smile: '🏡'
    },
    otherDecors: {
        value: '', text: 'Decors', smile: '🎈'
    }
};

const formSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setThemeInput: (state, action: PayloadAction<any>) => {
        state.themeInput = action.payload;
    },
    setVenueInput: (state, action) => {
        state.venueInput = action.payload;
    },
    setBudgetSelect: (state, action) => {
        state.budgetSelect = action.payload;
    },
    setServiceSelect: (state, action) => {
        state.serviceSelect = action.payload;
    },
    setProgramsSelect: (state, action) => {
        state.programsSelect = action.payload;
    },
    setOtherVendors: (state, action) => {
        state.otherVendors = action.payload;
    },
    setNameInput: (state, action) => {
        state.nameInput = action.payload;
    },
    setPhoneInput: (state, action) => {
        state.phoneInput = action.payload;
    },
    setEmailInput: (state, action) => {
        state.emailInput = action.payload;
    },
    setChildrenSelect: (state, action) => {
        state.childrenSelect = action.payload;
    },
    setDateInput: (state, action) => {
        state.dateInput = action.payload;
    },
    setTimeInput: (state, action) => {
        state.timeInput = action.payload;
    },
    setSpecialInput: (state, action) => {
        state.specialInput = action.payload;
    },
    setPlaceParty: (state, action) => {
        state.placeParty = action.payload;
    },
    setOtherDecors: (state, action) => {
        state.otherDecors = action.payload;
    }
  }
});

export const { setThemeInput, setVenueInput, setBudgetSelect, 
               setServiceSelect, setProgramsSelect, setOtherVendors, 
               setNameInput, setPhoneInput, setEmailInput, setChildrenSelect, setDateInput, setTimeInput, 
               setSpecialInput, setPlaceParty, setOtherDecors } = formSlice.actions;

export default formSlice.reducer;