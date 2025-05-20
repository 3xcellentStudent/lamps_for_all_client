export default interface CheckoutCreateSessionServerResponseDto {
  id: string
  amount_total: number
  amount_subtotal: number
  client_secret: string
  expires_at: number
  payment_status: string
  return_url: string
}