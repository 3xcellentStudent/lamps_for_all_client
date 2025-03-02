export interface GlobalDataType {
  id: string
  type: string
  colors: ColorsType,
  createdAt: number
  updatedAt: number
}

export interface ColorsType {
  text: {
    primaryText: ThemeColorsType
    secondaryText: ThemeColorsType
    optionalText: ThemeColorsType
  },
  backgrounds: {
    primaryBg: ThemeColorsType
    secondaryBg: ThemeColorsType
    optionalBg: ThemeColorsType
    elementsPrimaryBg: ThemeColorsType
    elementsSecondaryBg: ThemeColorsType
    elementsOptionalBg: ThemeColorsType
  }
}

export interface ThemeColorsType {hex: string, rgb: string}