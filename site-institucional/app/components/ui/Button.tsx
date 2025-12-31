import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface GradientButtonProps {
  href: string;
  colorFrom: string;
  colorTo: string;
  rounded?: 'full' | 'xl';
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function GradientButton({ 
  href, 
  colorFrom, 
  colorTo, 
  rounded = 'full', 
  children, 
  className = '',
  external = false 
}: GradientButtonProps) {
  const roundedClass = rounded === 'full' ? 'rounded-full' : 'rounded-xl';
  const baseClasses = `group inline-flex items-center justify-center gap-3 ${roundedClass} bg-gradient-to-r from-${colorFrom} to-${colorTo} px-12 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-${colorFrom}-500/30 focus:outline-none focus:ring-4 focus:ring-${colorFrom}-500/50 active:scale-95 ${className}`;

  // Se for link externo, usar <a>
  if (external || href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}