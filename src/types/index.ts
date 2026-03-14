export type SalesSolublesCapsula = {
    capsula_numero?: string
    peso_capsula_g?: number | null
    peso_capsula_sales_g?: number | null
    peso_sales_g?: number | null
    contenido_sales_ppm?: number | null
}

export type SalesSolublesPayload = {
    muestra: string
    numero_ot: string
    fecha_ensayo: string
    realizado_por?: string
    cliente?: string
    condicion_secado_aire?: string
    condicion_secado_horno?: string
    capsulas?: SalesSolublesCapsula[]
    capsula_numero?: string
    volumen_agua_ml?: number | null
    peso_suelo_g?: number | null
    volumen_solucion_tomada_ml?: number | null
    peso_capsula_g?: number | null
    peso_capsula_sales_g?: number | null
    peso_sales_g?: number | null
    contenido_sales_ppm?: number | null
    peso_constante_hora?: string[]
    peso_constante_peso_1?: Array<number | null>
    peso_constante_variacion_1?: Array<number | null>
    peso_constante_peso_2?: Array<number | null>
    peso_constante_variacion_2?: Array<number | null>
    equipo_horno_codigo?: string
    equipo_balanza_0001_codigo?: string
    equipo_balanza_001_codigo?: string
    revisado_por?: string
    revisado_fecha?: string
    aprobado_por?: string
    aprobado_fecha?: string
    [key: string]: unknown
}

export type ModuloPayload = SalesSolublesPayload

export type EnsayoDetail = {
    id: number
    numero_ensayo?: string | null
    numero_ot?: string | null
    cliente?: string | null
    muestra?: string | null
    fecha_documento?: string | null
    estado?: string | null
    payload?: SalesSolublesPayload | null
}

export type SaveResponse = {
    id: number
    numero_ensayo: string
    numero_ot: string
    estado: string
}
