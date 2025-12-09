"use client"

import { useState, useEffect } from 'react'

const participantCount = 9;
const presenterScale = 1;
const colorHue = 250;
const monitorRotation = 0;
const gridOpacity = 1;

export default function OnlineLectureIllustration() {
	// Track loading state for each image
	const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

	const avatarNumbers = [60, 40, 71, 42, 63, 67, 48, 69, 44, 65, 46, 7]
	const presenterAvatar = 89

	useEffect(() => {
		// Preload all images
		const imagesToLoad = [
			...avatarNumbers.map((num, index) => ({ src: `/avatars/${num}.png`, id: `participant-${index}` })),
			{ src: `/avatars/${presenterAvatar}.png`, id: 'presenter' }
		]

		imagesToLoad.forEach(({ src, id }) => {
			const img = new Image()
			img.onload = () => {
				setLoadedImages((prev) => new Set(prev).add(id))
			}
			img.onerror = () => {
				setLoadedImages((prev) => new Set(prev).add(id)) // Add anyway to avoid hanging
			}
			img.src = src
		})
	}, [])

	// Calculate grid layout based on participant count
	const getGridLayout = (count: number) => {
		const cols = Math.ceil(Math.sqrt(count))
		const rows = Math.ceil(count / cols)
		return { cols, rows, total: count }
	}

	const { cols, rows, total } = getGridLayout(participantCount)

	// Generate color based on hue
	const primaryColor = `hsl(${colorHue}, 45%, 55%)`
	const lightColor = `hsl(${colorHue}, 50%, 80%)`
	const darkColor = `hsl(${colorHue}, 50%, 35%)`


	const getAvatarImage = (index: number) => {
		return `/avatars/${avatarNumbers[index % avatarNumbers.length]}.png`
	}

	return (
		<div className="flex w-full items-center justify-center">
			<svg
				viewBox="0 0 1024 900"
				className="w-full max-w-3xl"
				style={{
					transform: `rotate(${monitorRotation}deg)`,
					transition: "transform 0.3s ease",
				}}
			>
				<defs>
					<linearGradient id="monitor-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor={lightColor} />
						<stop offset="100%" stopColor={primaryColor} />
					</linearGradient>
					<linearGradient id="skeleton-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#e0e0e0">
							<animate attributeName="stop-color" values="#e0e0e0; #f0f0f0; #e0e0e0" dur="1.5s" repeatCount="indefinite" />
						</stop>
						<stop offset="50%" stopColor="#f0f0f0">
							<animate attributeName="stop-color" values="#f0f0f0; #e0e0e0; #f0f0f0" dur="1.5s" repeatCount="indefinite" />
						</stop>
						<stop offset="100%" stopColor="#e0e0e0">
							<animate attributeName="stop-color" values="#e0e0e0; #f0f0f0; #e0e0e0" dur="1.5s" repeatCount="indefinite" />
						</stop>
					</linearGradient>
				</defs>

				{/* Monitor Stand */}
				<path d="M 350 730 L 420 850 L 600 850 L 670 730 Z" fill={darkColor} stroke={darkColor} strokeWidth="3" />
				<rect x="300" y="850" width="420" height="20" rx="10" fill={darkColor} />

				{/* Main Monitor */}
				<rect x="100" y="130" width="800" height="600" rx="20" fill="white" stroke={darkColor} strokeWidth="4" />

				{/* Monitor Header */}
				<rect x="100" y="130" width="800" height="50" rx="20" fill={lightColor} stroke={darkColor} strokeWidth="4" />
				<circle cx="130" cy="155" r="8" fill="white" stroke={darkColor} strokeWidth="2" />
				<circle cx="160" cy="155" r="8" fill="white" stroke={darkColor} strokeWidth="2" />
				<circle cx="190" cy="155" r="8" fill="white" stroke={darkColor} strokeWidth="2" />
				<circle cx="840" cy="155" r="10" fill="white" stroke={darkColor} strokeWidth="2" />
				<circle cx="870" cy="155" r="10" fill="white" stroke={darkColor} strokeWidth="2" />

				{/* Participant Grid */}
				<g opacity={gridOpacity}>
					{Array.from({ length: total }).map((_, i) => {
						const col = i % cols
						const row = Math.floor(i / cols)
						const cellWidth = 360 / cols
						const cellHeight = 480 / rows
						const x = 120 + col * cellWidth
						const y = 200 + row * cellHeight
						const imageId = `participant-${i}`
						const isLoaded = loadedImages.has(imageId)

						return (
							<g key={i}>
								<rect
									x={x}
									y={y}
									width={cellWidth - 10}
									height={cellHeight - 10}
									rx="8"
									fill="white"
									stroke={darkColor}
									strokeWidth="2"
								/>
								{!isLoaded && (
									<rect
										x={x + 5}
										y={y + 5}
										width={cellWidth - 20}
										height={cellHeight - 20}
										rx="4"
										fill="url(#skeleton-gradient)"
									/>
								)}
								<image
									href={getAvatarImage(i)}
									x={x + 5}
									y={y + 5}
									width={cellWidth - 20}
									height={cellHeight - 20}
									preserveAspectRatio="xMidYMid meet"
									opacity={isLoaded ? 1 : 0}
									style={{ transition: 'opacity 0.3s ease' }}
								/>
							</g>
						)
					})}
				</g>

				{/* Presenter Window */}
				<g
					style={{
						transform: `scale(${presenterScale})`,
						transformOrigin: "700px 380px",
						transition: "transform 0.3s ease",
					}}
				>
					<rect x="520" y="240" width="400" height="280" rx="15" fill="white" stroke={darkColor} strokeWidth="4" />
					<rect x="520" y="240" width="400" height="35" rx="15" fill={lightColor} stroke={darkColor} strokeWidth="4" />
					<circle cx="540" cy="257" r="5" fill="white" stroke={darkColor} strokeWidth="2" />
					<circle cx="560" cy="257" r="5" fill="white" stroke={darkColor} strokeWidth="2" />
					<circle cx="580" cy="257" r="5" fill="white" stroke={darkColor} strokeWidth="2" />

					{!loadedImages.has('presenter') && (
						<rect
							x="530"
							y="285"
							width="380"
							height="225"
							rx="8"
							fill="url(#skeleton-gradient)"
						/>
					)}
					<image
						href="/avatars/89.png"
						x="530"
						y="285"
						width="380"
						height="225"
						preserveAspectRatio="xMidYMid meet"
						opacity={loadedImages.has('presenter') ? 1 : 0}
						style={{ transition: 'opacity 0.3s ease' }}
					/>
				</g>

				{/* PPT Slide */}
				<rect x="545" y="535" width="310" height="80" rx="10" fill="white" stroke={darkColor} strokeWidth="3" />
				<text x="575" y="565" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill={darkColor}>
					PPT
				</text>
				<circle cx="590" cy="590" r="15" fill={lightColor} stroke={darkColor} strokeWidth="2" />
				<path d="M 585 585 Q 590 595 595 585" stroke={darkColor} strokeWidth="2" fill="none" />
				<line x1="630" y1="570" x2="830" y2="570" stroke={primaryColor} strokeWidth="8" strokeLinecap="round" />
				<line x1="630" y1="585" x2="820" y2="585" stroke={lightColor} strokeWidth="6" strokeLinecap="round" />
				<line x1="630" y1="600" x2="750" y2="600" stroke={lightColor} strokeWidth="6" strokeLinecap="round" />

				{/* Scroll Button */}
				<circle cx="510" cy="685" r="20" fill="white" stroke={darkColor} strokeWidth="3" />
			</svg>
		</div>
	)
}
