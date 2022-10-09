import { WidgetProps } from '@worldcoin/id';
import dynamic from 'next/dynamic';

const WorldIDWidget = dynamic<WidgetProps>(
  () => import('@worldcoin/id').then((mod) => mod.WorldIDWidget),
  { ssr: false }
)

export function WorldcoinWidget({ signal, setIsVerified }) {
  return (
    <WorldIDWidget
      actionId="wid_f42f2f67a9d8792cd00242d52c7b30fa"
      signal={signal}
      enableTelemetry
      onSuccess={(verificationResponse) => {
        console.log("verification success"); 
        const payload = {
          "merkle_root": verificationResponse.merkle_root,
          "nullifier_hash": verificationResponse.nullifier_hash,
          "action_id": "wid_f42f2f67a9d8792cd00242d52c7b30fa",
          "signal": signal,
          "proof": verificationResponse.proof
        }
        const verified = getVerificationFromAPI(payload)
        setIsVerified(verified);
      }
      }
      onError={(error) => {console.error(error); console.log("verification error")}}
    />
  )
}

async function getVerificationFromAPI(payload: any) {
  const settings = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  };  
  const res = await fetch("https://developer.worldcoin.org/api/v1/verify", settings);
  const response = await res.json();
  return response.success
}
