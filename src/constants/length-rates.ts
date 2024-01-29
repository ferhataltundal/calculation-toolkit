import { RateType } from "../types/type";
export const micrometerRates: RateType = {
  µm_to_µm: 1,
  µm_to_nm: 1000,
  µm_to_mm: 0.001,
  µm_to_cm: 0.0001,
  µm_to_dm: 0.00001,
  µm_to_m: 0.000001,
  µm_to_dam: 1e-7,
  µm_to_hm: 1e-8,
  µm_to_in: 0.0000393701,
  µm_to_km: 1e-9,
  µm_to_mile: 6.213711922e-10,
  µm_to_mil: 0.0393700787,
  µm_to_yard: 0.0000010936,
  µm_to_feet: 0.0000032808,
  µm_to_fm: 1000000000,
  µm_to_am: 1000000000000,
  µm_to_ly: 1.057000834e-22,
};

export const nanometerRates: RateType = {
  nm_to_nm: 1,
  nm_to_µm: 0.001,
  nm_to_mm: 0.000001,
  nm_to_cm: 1e-7,
  nm_to_dm: 1e-8,
  nm_to_m: 9.999999999e-10,
  nm_to_dam: 1e-10,
  nm_to_hm: 1e-11,
  nm_to_in: 3.937007874e-8,
  nm_to_km: 1e-12,
  nm_to_mile: 6.213711922e-13,
  nm_to_mil: 0.0000393701,
  nm_to_yard: 1.093613298e-9,
  nm_to_feet: 3.280839895e-9,
  nm_to_fm: 1000000,
  nm_to_am: 1000000000,
  nm_to_ly: 1.057000834e-25,
};

export const milimeterRates: RateType = {
  mm_to_mm: 1,
  mm_to_µm: 0.001,
  mm_to_nm: 1.0e-6,
  mm_to_cm: 10,
  mm_to_dm: 100,
  mm_to_m: 1000,
  mm_to_dam: 10000,
  mm_to_hm: 100000,
  mm_to_in: 25.4,
  mm_to_km: 1000000,
  mm_to_mile: 1609344,
  mm_to_mil: 0.0254,
  mm_to_yard: 914.4,
  mm_to_feet: 304.8,
  mm_to_fm: 1000000000000,
  mm_to_am: 1000000000000000,
  mm_to_ly: 9.46073047258e18,
};

export const centimeterRates: RateType = {
  cm_to_cm: 1,
  cm_to_µm: 10000,
  cm_to_nm: 1.0e-7,
  cm_to_mm: 10,
  cm_to_dm: 0.1,
  cm_to_m: 0.01,
  cm_to_dam: 0.001,
  cm_to_hm: 0.0001,
  cm_to_inch: 0.3937007874,
  cm_to_km: 1.0e-5,
  cm_to_mile: 6.2137119223733e-6,
  cm_to_mil: 393.7007874016,
  cm_to_yard: 0.010936133,
  cm_to_feet: 0.032808399,
  cm_to_fm: 1.0e-13,
  cm_to_am: 1.0e16,
  cm_to_ly: 1.0570008340247e-18,
};

export const meterRates: RateType = {
  m_to_m: 1,
  m_to_µm: 1000000,
  m_to_nm: 1.0e-9,
  m_to_mm: 1000,
  m_to_dm: 10,
  m_to_cm: 100,
  m_to_dam: 0.1,
  m_to_hm: 0.01,
  m_to_in: 39.37007874,
  m_to_km: 0.001,
  m_to_mile: 0.000621371192,
  m_to_mil: 39370.0787,
  m_to_yard: 1.0936133,
  m_to_feet: 3.2808399,
  m_to_fm: 1.0e15,
  m_to_am: 1.0e18,
  m_to_ly: 1.057000834e-16,
};

export const decimeterRates: RateType = {
  dm_to_dm: 1,
  dm_to_µm: 100000,
  dm_to_nm: 100000000,
  dm_to_mm: 100,
  dm_to_m: 0.1,
  dm_to_cm: 10,
  dm_to_dam: 0.01,
  dm_to_hm: 0.001,
  dm_to_in: 3.937007874,
  dm_to_km: 0.0001,
  dm_to_mile: 0.0000621371,
  dm_to_mil: 3937.00787,
  dm_to_yard: 0.1093613298,
  dm_to_feet: 0.3280839895,
  dm_to_fm: 1.0e14,
  dm_to_am: 1.0e17,
  dm_to_ly: 1.057000834e-17,
};

export const decameterRates: RateType = {
  dam_to_dam: 1,
  dam_to_µm: 10000000,
  dam_to_nm: 10000000000,
  dam_to_mm: 10000,
  dam_to_m: 10,
  dam_to_cm: 1000,
  dam_to_dm: 100,
  dam_to_hm: 0.1,
  dam_to_in: 393.7007874,
  dam_to_km: 0.01,
  dam_to_mile: 0.0062137119,
  dam_to_mil: 393700.7874,
  dam_to_yard: 10.936132983,
  dam_to_feet: 32.80839895,
  dam_to_fm: 1.0e16,
  dam_to_am: 1.0e19,
  dam_to_ly: 1.057000834e-15,
};

export const hectometerRates: RateType = {
  hm_to_hm: 1,
  hm_to_µm: 100000000,
  hm_to_nm: 100000000000,
  hm_to_mm: 100000,
  hm_to_m: 100,
  hm_to_cm: 10000,
  hm_to_dm: 1000,
  hm_to_dam: 10,
  hm_to_in: 3937.007874,
  hm_to_km: 0.1,
  hm_to_mile: 0.0621371192,
  hm_to_mil: 3937007.874,
  hm_to_yard: 109.36132983,
  hm_to_feet: 328.0839895,
  hm_to_fm: 1.0e17,
  hm_to_am: 1.0e20,
  hm_to_ly: 1.057000834e-14,
};

export const inchRates: RateType = {
  in_to_in: 1,
  in_to_µm: 25400,
  in_to_nm: 25400000,
  in_to_mm: 25.4,
  in_to_m: 0.0254,
  in_to_cm: 2.54,
  in_to_dm: 0.254,
  in_to_dam: 0.00254,
  in_to_hm: 0.000254,
  in_to_km: 0.0000254,
  in_to_mile: 0.0000157828,
  in_to_mil: 1000,
  in_to_yard: 0.0277777778,
  in_to_feet: 0.0833333333,
  in_to_fm: 25400000000000,
  in_to_am: 2.54e16,
  in_to_ly: 2.684782118e-18,
};

export const mileRates: RateType = {
  mile_to_mile: 1,
  mile_to_µm: 1609344000,
  mile_to_nm: 1609344000000,
  mile_to_mm: 1609344,
  mile_to_m: 1609.344,
  mile_to_cm: 160934.4,
  mile_to_dm: 16093.44,
  mile_to_dam: 160.9344,
  mile_to_hm: 16.09344,
  mile_to_in: 63360,
  mile_to_km: 1.609344,
  mile_to_mil: 63360000,
  mile_to_yard: 1760,
  mile_to_feet: 5280,
  mile_to_fm: 1609344000000010200,
  mile_to_am: 1.609344e21,
  mile_to_ly: 1.70107795e-13,
};

export const kilometerRates: RateType = {
  km_to_km: 1,
  km_to_µm: 1000000000,
  km_to_nm: 1000000000000,
  km_to_mm: 1000000,
  km_to_m: 1000,
  km_to_cm: 100000,
  km_to_dm: 10000,
  km_to_dam: 100,
  km_to_hm: 10,
  km_to_in: 39370.07874,
  km_to_mile: 0.6213711922,
  km_to_mil: 39370078.74,
  km_to_yard: 1093.6132983,
  km_to_feet: 3280.839895,
  km_to_fm: 1.0e18,
  km_to_am: 1e21,
  km_to_ly: 1.057000834e-13,
};

export const milRates: RateType = {
  mil_to_mil: 1,
  mil_to_µm: 25.4,
  mil_to_nm: 25400,
  mil_to_mm: 0.0254,
  mil_to_m: 0.0000254,
  mil_to_cm: 0.00254,
  mil_to_dm: 0.000254,
  mil_to_dam: 0.00000254,
  mil_to_hm: 2.539999999e-7,
  mil_to_in: 0.001,
  mil_to_mile: 1.578282828e-8,
  mil_to_km: 2.539999999e-8,
  mil_to_yard: 0.0000277778,
  mil_to_feet: 0.0000833333,
  mil_to_fm: 25400000000,
  mil_to_am: 25400000000000,
  mil_to_ly: 2.684782118e-21,
};

export const yardRates: RateType = {
  yard_to_yard: 1,
  yard_to_µm: 914400,
  yard_to_nm: 914400000,
  yard_to_mm: 914.4,
  yard_to_m: 0.9144,
  yard_to_cm: 91.44,
  yard_to_dm: 9.144,
  yard_to_dam: 0.09144,
  yard_to_hm: 0.009144,
  yard_to_in: 36,
  yard_to_mile: 0.0005681818,
  yard_to_km: 0.0009144,
  yard_to_mil: 36000,
  yard_to_feet: 3,
  yard_to_fm: 914400000000007,
  yard_to_am: 914400000000006400,
  yard_to_ly: 9.665215626e-17,
};

export const feetRates: RateType = {
  feet_to_feet: 1,
  feet_to_µm: 304800,
  feet_to_nm: 304800000,
  feet_to_mm: 304.8,
  feet_to_m: 0.3048,
  feet_to_cm: 30.48,
  feet_to_dm: 3.048,
  feet_to_dam: 0.03048,
  feet_to_hm: 0.003048,
  feet_to_in: 12,
  feet_to_mile: 0.0001893939,
  feet_to_km: 0.0003048,
  feet_to_mil: 12000,
  feet_to_yard: 0.3333333333,
  feet_to_fm: 304800000000002,
  feet_to_am: 304800000000002200,
  feet_to_ly: 3.221738542e-17,
};

export const femtometerRates: RateType = {
  fm_to_fm: 1,
  fm_to_µm: 1e-9,
  fm_to_nm: 0.000001,
  fm_to_mm: 1e-12,
  fm_to_m: 9.999999999e-16,
  fm_to_cm: 9.999999999e-14,
  fm_to_dm: 1e-14,
  fm_to_dam: 1e-16,
  fm_to_hm: 9.999999999e-18,
  fm_to_in: 3.937007874e-14,
  fm_to_mile: 6.213711922e-19,
  fm_to_km: 9.999999999e-19,
  fm_to_mil: 3.937007874e-11,
  fm_to_yard: 1.093613298e-15,
  fm_to_feet: 3.280839895e-15,
  fm_to_am: 1000,
  fm_to_ly: 1.057000834e-31,
};
export const attometerRates: RateType = {
  am_to_am: 1,
  am_to_µm: 1e-12,
  am_to_nm: 1e-9,
  am_to_mm: 1e-15,
  am_to_m: 1e-18,
  am_to_cm: 1e-16,
  am_to_dm: 1e-17,
  am_to_dam: 1e-19,
  am_to_hm: 1e-20,
  am_to_in: 3.937007874e-17,
  am_to_mile: 6.213711922e-22,
  am_to_km: 1e-21,
  am_to_mil: 3.937007874e-14,
  am_to_yard: 1.093613298e-18,
  am_to_feet: 3.280839895e-18,
  am_to_fm: 0.001,
  am_to_ly: 1.057000834e-34,
};

export const lightYearRates: RateType = {
  ly_to_ly: 1,
  ly_to_µm: 9.460730472e21,
  ly_to_nm: 9.460730472e24,
  ly_to_mm: 9460730472580043000,
  ly_to_m: 9460730472580044,
  ly_to_cm: 946073047258004200,
  ly_to_dm: 94607304725800430,
  ly_to_dam: 946073047258004,
  ly_to_hm: 94607304725800,
  ly_to_in: 372469703644879100,
  ly_to_mile: 5878625373183,
  ly_to_km: 9460730472580,
  ly_to_mil: 372469703644888500000,
  ly_to_yard: 10346380656802248,
  ly_to_feet: 31039141970406748,
  ly_to_fm: 9.460730472e30,
  ly_to_am: 9.460730472e33,
};
