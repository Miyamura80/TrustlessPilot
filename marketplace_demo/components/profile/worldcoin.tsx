import { WidgetProps } from '@worldcoin/id';
import dynamic from 'next/dynamic';

const WorldIDWidget = dynamic<WidgetProps>(
  () => import('@worldcoin/id').then((mod) => mod.WorldIDWidget),
  { ssr: false }
)

export function WorldcoinWidget({ signal }) {
  return (
    <WorldIDWidget
      actionId="wid_f42f2f67a9d8792cd00242d52c7b30fa"
      signal={signal}
      enableTelemetry
      onSuccess={(verificationResponse) => console.log('verification', verificationResponse)}
      onError={(error) => console.error(error)}
    />
  )
}
