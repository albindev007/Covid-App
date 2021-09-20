export const initialState = {
  progress: false,
  states: [],
  districts: [],
  vaccine: [],
  vaccineCopy: [],
  userData: {mobileNumber: '', password: ''},
  selectedState: {},
  selectedDistrict: {},
  selectedPincode: '',
  showLabel: true,
  landingPageTab: 0,
  vaccinePageTab: 0,
  logoutButton: false,
  vaccineFilters: {
    '18+': false,
    '45+': false,
    Free: false,
    Paid: false,
    'First Dose': false,
  },
};