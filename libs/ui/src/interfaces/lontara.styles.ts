import { LontaraColorRoles } from "./lontara.color-roles"

export interface LontaraConfiguration {
    uploadApiUrl?: string,
    colors?: {
        surface?: string,
        primary?: LontaraColorRoles,
        secondary?: LontaraColorRoles,
        info?: LontaraColorRoles,
        danger?: LontaraColorRoles,
        success?: LontaraColorRoles,
        warning?: LontaraColorRoles,
        black?: LontaraColorRoles,
        gray?: LontaraColorRoles,
        softGray?: LontaraColorRoles,
        disabled?: LontaraColorRoles,
    },
    fonts?: {
        fontFamily?: string,
        secondaryFontFamily?: string,
        size?: {
            '2xs'?: string,
            xs?: string,
            sm?: string,
            base?: string,
            lg?: string,
            xl?: string,
            '2xl'?: string,
            headingSm?: string,
            heading?: string,
            headingLg?: string,
            headingXl?: string,
        }
    }
}