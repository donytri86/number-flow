import NumberFlow, { useLinear, defaultXTiming } from '@number-flow/react'

const bouncySpring = {
	duration: 750,
	// prettier-ignore
	easing: "linear(0 0%, 0.0058021823078800595 1.1235955056179776%, 0.022019245228978974 2.247191011235955%, 0.04697426784552192 3.370786516853933%, 0.07913194654911777 4.49438202247191%, 0.11709565568904509 5.617977528089888%, 0.15960336091615873 6.741573033707866%, 0.2055225959731031 7.865168539325843%, 0.25384469405525506 8.98876404494382%, 0.30367844589280607 10.112359550561798%, 0.35424333850373657 11.235955056179776%, 0.40486251123515354 12.359550561797754%, 0.45495554931807397 13.483146067415731%, 0.5040312197589397 14.606741573033709%, 0.5516802400120898 15.730337078651687%, 0.5975681565371418 16.853932584269664%, 0.6414283980456571 17.97752808988764%, 0.6830555569725216 19.10112359550562%, 0.7222989424488457 20.224719101123597%, 0.7590564387760397 21.348314606741575%, 0.7932686950692723 22.471910112359552%, 0.8249136643114104 23.59550561797753%, 0.8540015034900891 24.719101123595507%, 0.8805698407319795 25.842696629213485%, 0.9046794103485847 26.966292134831463%, 0.9264100524147755 28.08988764044944%, 0.9458570698619917 29.213483146067418%, 0.9631279330300166 30.337078651685395%, 0.9783393191326047 31.460674157303373%, 0.9916144721023972 32.58426966292135%, 1.0030808667404794 33.70786516853933%, 1.0128681599585279 34.831460674157306%, 1.0211064111219177 35.95505617977528%, 1.0279245530378938 37.07865168539326%, 1.033449094943999 38.20224719101124%, 1.0378030389010637 39.325842696629216%, 1.0411049912474741 40.449438202247194%, 1.0434684511951837 41.57303370786517%, 1.0450012592136182 42.69662921348315%, 1.0458051885285111 43.82022471910113%, 1.0459756638345723 44.943820224719104%, 1.0456015921619513 46.06741573033708%, 1.044765291727289 47.19101123595506%, 1.0435425055235072 48.31460674157304%, 1.0420024873433105 49.438202247191015%, 1.0402081488764594 50.56179775280899%, 1.0382162574589653 51.68539325842697%, 1.0360776749738179 52.80898876404495%, 1.0338376292996567 53.932584269662925%, 1.0315360105693312 55.0561797752809%, 1.029207685329244 56.17977528089888%, 1.0268828224786164 57.30337078651686%, 1.02458722561227 58.426966292134836%, 1.022342667089039 59.55056179775281%, 1.020167219799199 60.67415730337079%, 1.0180755832077413 61.79775280898877%, 1.0160794008059388 62.921348314606746%, 1.0141875666120557 64.04494382022472%, 1.0124065188242148 65.16853932584269%, 1.0107405191458168 66.29213483146067%, 1.0091919166781451 67.41573033707866%, 1.0077613956078837 68.53932584269663%, 1.0064482062113422 69.6629213483146%, 1.005250378954478 70.78651685393258%, 1.0041649216907218 71.91011235955057%, 1.003188000149523 73.03370786516854%, 1.002315102069899 74.15730337078651%, 1.001541185467481 75.28089887640449%, 1.0008608116329931 76.40449438202248%, 1.0002682635470859 77.52808988764045%, 0.9997576504632046 78.65168539325842%, 0.9993229994588604 79.7752808988764%, 0.998958334788324 80.89887640449439%, 0.9986577458883016 82.02247191011236%, 0.9984154448944083 83.14606741573033%, 0.9982258145219031 84.26966292134831%, 0.9980834471507738 85.3932584269663%, 0.9979831759342885 86.51685393258427%, 0.9979200987229117 87.64044943820224%, 0.9978895955632022 88.76404494382022%, 0.9978873404950641 89.88764044943821%, 0.9979093083314955 91.01123595505618%, 0.9979517770636321 92.13483146067415%, 0.9980113264912046 93.25842696629213%, 0.9980848336351612 94.38202247191012%, 0.9981694654457833 95.50561797752809%, 0.9982626692766015 96.62921348314606%, 0.9983621615522535 97.75280898876404%, 0.9984659150174638 98.87640449438203%, 1 100%)"
} as const satisfies EffectTiming

const fadeTiming: EffectTiming = { duration: 350, easing: 'ease-out' }

type Props = {
	value: number
}

export default function CustomTimingsExample({ value }: Props) {
	// Use bouncySpring if linear() is supported, otherwise
	// fall back to default timing:
	const timing = useLinear(bouncySpring, defaultXTiming)

	return (
		<NumberFlow
			value={value}
			xTiming={timing}
			yTiming={timing}
			fadeTiming={fadeTiming}
			className="~text-xl/4xl font-semibold"
			style={{ '--number-flow-char-height': '0.85em' }}
		/>
	)
}
