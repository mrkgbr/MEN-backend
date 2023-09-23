/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Nt9u4G8myYmdW75J7hilpjcuK5iuM47I9idbDe0sYOMr0K68v067OMGPcf7Qvdby23hoAmz5AjnrN6OaQb3ZzGx00d9eXn68a',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from endpoint
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create a checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
