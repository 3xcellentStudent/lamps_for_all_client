export interface ApiResponseType {status: number, data: string}

export interface ApiResponseDataType {
  id: string
  links: {href: string, rel: "self" | "payer-action", method: "GET"}[]
}