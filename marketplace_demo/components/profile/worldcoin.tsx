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
      enableTelemetry={true}
      onSuccess={(verificationResponse) => console.log(verificationResponse)}
      onError={(error) => console.error(error)}
      debug={true}
    />
  )
}
