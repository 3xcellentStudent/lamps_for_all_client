export interface CaptureOrderResponse {
  data: {
    id: string;
    status: Status;
    payment_source: {
      paypal: {
        name: {
          given_name: string;
          surname: string;
        };
        email_address: string;
        account_id: string;
      };
    };
    purchase_units: PurchaseUnit[];
    payer: Payer;
    links: Link[];
  }
  status: number
}

export type Status = "CREATED" | "SAVED" | "APPROVED" | "VOIDED" | "COMPLETED" | "PAYER_ACTION_REQUIRED"

export interface PurchaseUnit {
  reference_id: string;
  shipping: {
    address: {
      address_line_1: string;
      address_line_2?: string;
      admin_area_2: string;
      admin_area_1: string;
      postal_code: string;
      country_code: string;
    };
  };
  payments: {
    captures: Capture[];
  };
}

export interface Capture {
  id: string;
  status: string;
  amount: {
    currency_code: string;
    value: string;
  };
  seller_protection: {
    status: string;
    dispute_categories: string[];
  };
  final_capture: boolean;
  disbursement_mode: string;
  seller_receivable_breakdown: {
    gross_amount: Amount;
    paypal_fee: Amount;
    net_amount: Amount;
  };
  create_time: string;
  update_time: string;
  links: Link[];
}

export interface Amount {
  currency_code: string;
  value: string;
}

export interface Payer {
  name: {
    given_name: string;
    surname: string;
  };
  email_address: string;
  payer_id: string;
}

export interface Link {
  href: string;
  rel: string;
  method: string;
}