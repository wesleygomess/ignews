import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({priceId} : SubscribeButtonProps){
  const {data: session} = useSession();

  async function handleSubscribe() {
    if(!session){
      signIn("github");
      return;
    }

    try {
      const reponse = await api.post("/subscribe");

      const {sessionId} = reponse.data;

      const stripe = getStripeJs();

      (await stripe).redirectToCheckout({ sessionId });      

    } catch(error) {
      console.log("ERRO API STRIPE..", error)
    }
  }

  return(
    <button 
      type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}
    >
      Subscribe now 
    </button>
  );
}