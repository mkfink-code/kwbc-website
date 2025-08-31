import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'nav' | 'hero'
  className?: string
}

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14', 
  lg: 'w-20 h-20',
  xl: 'w-28 h-28',
  nav: 'w-40 h-40', // Even bigger navigation logo
  hero: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/images/kwbc-logo.png"
        alt="Key West Blue Crab Logo"
        fill
        className="object-contain"
        priority={size === 'sm'} // Priority loading for navigation logo
      />
    </div>
  )
}