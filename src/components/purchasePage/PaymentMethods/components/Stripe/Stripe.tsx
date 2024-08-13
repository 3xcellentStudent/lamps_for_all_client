// import {Stripe} from 'stripe'

// const publicKey = "pk_test_51PXUOX2MIYaHBYhgAryHlF3KuvOGiMn71WIIippuqpElsbJMSasTuB5cJJbpRlhYzifmTQTgRkvv73MGPqt6K3ly00bBVo6AN5"
// const clientSecret = "sk_test_51PXUOX2MIYaHBYhghzy4HR83NY7OWys1R2uOXx8bCBYxAbWQjZbi9aCOx58uNZGkLGejABibqUaUpEYl5FEK7Hdh006isEC8XD"


// export default function StripeButton(){

//   async function createSession(){
//     const stripe = new Stripe(clientSecret);

//     const session = await stripe.checkout.sessions.create({
//       // success_url: 'https://example.com/success',
//       payment_method_types: [""]
//       line_items: [
//         {
//           price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
//           quantity: 2,
//         },
//       ],
//       mode: 'payment',
//     });
//   }

// }