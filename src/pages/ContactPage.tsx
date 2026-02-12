import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Send } from 'lucide-react';
import './ContactPage.css';

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
    },
  });

  const services = [
    { id: 'website-design', label: 'Website Design' },
    { id: 'development', label: 'Development' },
    { id: 'seo', label: 'SEO' },
    { id: 'ads', label: 'Ads' },
    { id: 'other', label: 'Other' },
  ];

  const handleServiceToggle = (serviceId: string) => {
    const updatedServices = selectedServices.includes(serviceId)
      ? selectedServices.filter((s) => s !== serviceId)
      : [...selectedServices, serviceId];
    setSelectedServices(updatedServices);
    setValue('services', updatedServices, { shouldValidate: true });
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.fromTo(
        '.contact-hero-title',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Hero subtitle animation
      gsap.fromTo(
        '.contact-hero-subtitle',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Form animation
      gsap.fromTo(
        '.contact-form',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
      setSelectedServices([]);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page bg-black min-h-screen">
      {/* Hero Section with Form */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24 pb-12"
      >
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        </div>

        {/* Content + Form Grid */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 sm:px-12 lg:px-20 py-12 md:py-24">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Left: Hero Content */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden mb-2">
                <h1 className="contact-hero-title text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5.5rem] font-light tracking-[-0.03em] leading-[1.1] text-white">
                  Let's Create
                </h1>
              </div>
              <div className="overflow-hidden mb-2">
                <h1 className="contact-hero-title text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5.5rem] font-light tracking-[-0.03em] leading-[1.1]">
                  <span className="text-indigo-500">Something</span>
                </h1>
              </div>
              <div className="overflow-hidden mb-2">
                <h1 className="contact-hero-title text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5.5rem] font-light tracking-[-0.03em] leading-[1.1]">
                  <span className="text-indigo-500">Amazing</span>
                </h1>
              </div>
              <div className="overflow-hidden mb-6">
                <h1 className="contact-hero-title text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5.5rem] font-light tracking-[-0.03em] leading-[1.1] text-white">
                  Together
                </h1>
              </div>
              <div className="overflow-hidden pb-2">
                <p className="contact-hero-subtitle text-base md:text-lg lg:text-lg xl:text-xl text-white/60 max-w-lg">
                  Have a project in mind? We'd love to hear about it. Drop us a message
                  and let's start building something extraordinary.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form lg:col-span-3">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm text-white/70">
                        Name <span className="text-indigo-500">*</span>
                      </label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-indigo-500 h-11 rounded-none"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm text-white/70">
                        Email <span className="text-indigo-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="john@example.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-indigo-500 h-11 rounded-none"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-3">
                    <label className="block text-sm text-white/70">
                      Services Interested In <span className="text-indigo-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          htmlFor={service.id}
                          className="flex items-center space-x-2 p-2.5 bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors cursor-pointer"
                        >
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={() => handleServiceToggle(service.id)}
                            className="border-white/30 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600 flex-shrink-0"
                          />
                          <span className="text-xs sm:text-sm text-white cursor-pointer flex-1 leading-tight">
                            {service.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.services && (
                      <p className="text-sm text-red-400">{errors.services.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm text-white/70">
                      Message <span className="text-indigo-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-indigo-500 resize-none rounded-none"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className="relative z-10 font-medium">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20">
                        <p className="text-green-400 text-sm">
                          ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20">
                        <p className="text-red-400 text-sm">
                          ✗ Something went wrong. Please try again or email us directly.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
