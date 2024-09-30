import NumberFlow, { useLinear, defaultYTiming } from '@number-flow/react'

const bouncySpring = {
	duration: 750,
	// prettier-ignore
	easing: 'linear(0, 0.00753452567240231, 0.02826096837231418, 0.059592844108134674, 0.09923652718686611, 0.14517405286574048, 0.1956448707662672, 0.2491269972072537, 0.3043179458093597, 0.36011575328994977, 0.4156003611125702, 0.47001556333217903, 0.5227516862935712, 0.5733291264726111, 0.6213828383526829, 0.6666478344440853, 0.708945734018511, 0.7481723754816051, 0.7842864891873293, 0.8172994125620383, 0.8472658173208255, 0.8742754090069171, 0.8984455517675519, 0.9199147659169741, 0.9388370421688428, 0.9553769142067524, 0.9697052302831781, 0.9819955645944478, 0.9924212100921688, 1.0011526959984685, 1.0083557754498087, 1.0141898312751867, 1.01880665080822, 1.0223495237425186, 1.0249526202830317, 1.026740610152261, 1.0278284863201508, 1.0283215605911404, 1.0283156013614156, 1.0278970869221344, 1.0271435506058118, 1.0261239968349178, 1.0248993697213602, 1.0235230582748787, 1.0220414245034817, 1.0204943427293163, 1.018915740300964, 1.0173341315625979, 1.0157731384480284, 1.014251992411133, 1.0127860135923017, 1.0113870641628755, 1.0100639736961108, 1.008822935194256, 1.0076678710671643, 1.0066007689187486, 1.0056219874634515, 1.0047305332754193, 1.0039243093774537, 1.003200336913785, 1.0025549513284948, 1.0019839745976518, 1.0014828651449934, 1.001046847114799, 1.0006710206873748, 1.0003504551076963, 1.0000802660610513, 0.9998556789753096, 0.9996720797615514, 0.9995250544265524, 0.9994104189050068, 0.9993242403688807, 0.9992628511780957, 0.9992228565426926, 1)'
} as const satisfies EffectTiming

type Props = {
	value: number
}

export default function CustomTimingsExample({ value }: Props) {
	// Use bouncySpring if linear() is supported, otherwise
	// fall back to default timing:
	const yTiming = useLinear(bouncySpring, defaultYTiming)

	return (
		<NumberFlow
			value={value}
			yTiming={yTiming}
			className="~text-xl/4xl font-semibold"
			style={{ '--number-flow-char-height': '0.85em' }}
		/>
	)
}
