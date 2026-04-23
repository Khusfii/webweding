import { AnimatePresence, motion } from 'motion/react';
import {
  Calendar,
  Clock,
  Heart,
  MailOpen,
  MapPin,
  Building2,
  Navigation,
  Music,
  Music4
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle body scroll locking when overlay is open
  useEffect(() => {
    if (!isOpened) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="ambient-glow" />
      <div className="particles-layer" />

      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source
          src="./music/nasheed.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Entry Overlay */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-dim"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
          >
            <div className="absolute inset-0 z-0">
              <img
                alt="Background elegant roses"
                className="w-full h-full object-cover opacity-20"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhdibuKoixVZjXI9DJQocUCtWUroV4GD_HeDo39E0W6bmkOGWNkGNG7eeh-z3T--lmbDB9WThH5GkC7hrX7g2r2n66MqCbqsZtrJ6BDNsQDhwg-3XM0yLuA9ein_jtM5aB1lT-2Lg564JzGEzjLLR8VA158IfjU_iNSTrjqng9xebwG-_r0Gn37A25yRU5wYsKie_xnlKEqemVUS1ovEACiMjF2M2X1qPFO3dyppG5D7Q3kLQGWi6Kf5sh6SBLX1lFp-Qk97r3Up_g"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background-dark" />
            </div>
            
            <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-8 p-6 max-w-2xl mx-auto">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-sans text-[12px] font-bold text-primary tracking-[0.3em] uppercase"
              >
                The Wedding Of
              </motion.p>
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-serif md:text-[64px] text-5xl text-white text-glow font-bold leading-tight"
              >
                Arya & Kirana
              </motion.h1>
              <motion.p 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-serif text-[32px] text-on-surface-variant italic mb-8"
              >
                24 Agustus 2024
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={handleOpenInvitation}
                className="btn-primary-glow px-8 py-4 font-sans text-[12px] font-bold tracking-[0.2em] uppercase flex items-center gap-3 mt-8"
              >
                <MailOpen size={18} />
                Buka Undangan
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={!isOpened ? 'pointer-events-none' : ''}>
        {/* Header */}
        <header className="fixed top-0 w-full z-50 border-b border-fuchsia-900/30 bg-background-dark/80 backdrop-blur-xl transition-all duration-500 ease-out shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="flex justify-between items-center w-full px-4 md:px-8 py-6">
            <div className="text-2xl font-serif font-bold text-fuchsia-600 drop-shadow-[0_0_12px_rgba(255,0,127,0.6)]">
              ETERNITY
            </div>
            <nav className="hidden md:flex gap-8">
              {['Cerita', 'Acara', 'RSVP', 'Registry'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/60 hover:text-fuchsia-400 transition-colors duration-300 font-serif text-sm tracking-[0.2em] uppercase hover:drop-shadow-[0_0_10px_rgba(255,0,127,0.8)] hover:scale-105"
                >
                  {item === 'Cerita' ? 'Our Story' : item}
                </a>
              ))}
            </nav>
            <a href="#rsvp" className="btn-primary-glow px-6 py-2 font-sans text-[12px] font-bold tracking-widest uppercase hidden md:block">
              RSVP
            </a>
          </div>
        </header>

        <main className="relative z-10 pt-24">
          {/* Hero Section */}
          <section id="beranda" className="min-h-screen flex items-center justify-center relative px-4">
            <div className="absolute inset-0 z-0">
              <img
                alt="Close-up of a wedding couple"
                className="w-full h-full object-cover opacity-30"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhdibuKoixVZjXI9DJQocUCtWUroV4GD_HeDo39E0W6bmkOGWNkGNG7eeh-z3T--lmbDB9WThH5GkC7hrX7g2r2n66MqCbqsZtrJ6BDNsQDhwg-3XM0yLuA9ein_jtM5aB1lT-2Lg564JzGEzjLLR8VA158IfjU_iNSTrjqng9xebwG-_r0Gn37A25yRU5wYsKie_xnlKEqemVUS1ovEACiMjF2M2X1qPFO3dyppG5D7Q3kLQGWi6Kf5sh6SBLX1lFp-Qk97r3Up_g"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center z-10 max-w-4xl mx-auto mt-20"
            >
              <p className="font-sans text-[12px] font-bold text-primary mb-6 tracking-[0.3em] uppercase">Momen Abadi</p>
              <h1 className="font-serif md:text-[64px] text-5xl text-white mb-4 text-glow font-bold leading-tight text-balance">Arya & Kirana</h1>
              <p className="font-serif text-[24px] md:text-[32px] text-on-surface-variant mb-12 italic text-balance px-4">
                Kami mengundang Anda untuk merayakan cinta kami
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
                <div className="text-center">
                  <span className="block font-serif text-[48px] font-semibold text-primary text-glow leading-none">24</span>
                  <span className="block font-sans text-[12px] font-bold text-white/60 uppercase tracking-widest mt-2">Agustus</span>
                </div>
                <div className="w-px h-16 bg-fuchsia-900/50 hidden md:block" />
                <div className="text-center">
                  <span className="block font-serif text-[48px] font-semibold text-primary text-glow leading-none">2024</span>
                  <span className="block font-sans text-[12px] font-bold text-white/60 uppercase tracking-widest mt-2">Tahun</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Our Story Section */}
          <section id="cerita" className="py-[120px] px-4 md:px-6 max-w-[1200px] mx-auto relative overflow-hidden">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[40px] md:text-[48px] font-semibold text-white mb-2">Cerita Kami</h2>
              <div className="w-12 h-1 bg-primary mx-auto shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <img
                  alt="Wedding couple traditional attire"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-fuchsia-900/30 shadow-[0_0_30px_rgba(255,0,127,0.1)] relative z-10"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujZ15IFc2hrRnGq_cOHBB6e7xvMNA7ryrMzDl2zx4KEVJfVsO98LYPVAEJmMBD2fibF8AJ3bbQX_1lczkvn7sqv8QVIpI-9dOkBgRN_6RkHrTb0rlewDUfnvL526jxIawzYKY6m5z6pwyEOm3i8vsoH9prcNocuLF5XGhxB-Afh8BtSAJ66nEMMOuJmTRaJdqJB3pR4trDmwHp6nv_90svJPRxyA4Mo5xRmT-7DVQ_w-B7ObZHh3O50Mt648xQkhTqMinjAeicxmw"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl z-0 pointer-events-none" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8 glass-card p-8 md:p-12"
              >
                <Heart className="text-primary-electric w-10 h-10 mb-4 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] fill-primary-electric/20" />
                <p className="font-sans text-[18px] text-on-surface-variant leading-relaxed">
                  Berawal dari pertemuan tak terduga di bawah cahaya kota Jakarta, kami menemukan harmoni dalam perbedaan. Setiap detik yang kami lalui bersama menenun kisah kasih yang mendalam.
                </p>
                <p className="font-sans text-[16px] text-on-surface/80 leading-relaxed">
                  Kini, kami melangkah menuju babak baru yang penuh gemerlap. Kami berjanji untuk saling mendampingi, mengarungi lautan waktu dengan cinta yang tak terpadamkan, seperti cahaya neon di malam yang gelap.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Events Section */}
          <section id="acara" className="py-[120px] bg-surface-dim relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="font-serif text-[40px] md:text-[48px] font-semibold text-white mb-2">Rangkaian Acara</h2>
                <div className="w-12 h-1 bg-primary mx-auto shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {/* Event Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-10 hover:border-primary-electric/50 transition-colors duration-500 relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-electric/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-serif text-[32px] font-medium text-white mb-8">Akad Nikah</h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-5">
                      <Calendar className="text-primary mt-1 w-6 h-6 shrink-0" />
                      <div>
                        <p className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-1">Tanggal</p>
                        <p className="font-sans text-[16px] text-on-surface">Sabtu, 24 Agustus 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <Clock className="text-primary mt-1 w-6 h-6 shrink-0" />
                      <div>
                        <p className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-1">Waktu</p>
                        <p className="font-sans text-[16px] text-on-surface">08:00 - 10:00 WIB</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <MapPin className="text-primary mt-1 w-6 h-6 shrink-0" />
                      <div>
                        <p className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-1">Tempat</p>
                        <p className="font-sans text-[16px] text-on-surface">Masjid Agung Al-Azhar, Jakarta Selatan</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                {/* Event Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-10 hover:border-primary-electric/50 transition-colors duration-500 relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-electric/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-serif text-[32px] font-medium text-white mb-8">Resepsi Mewah</h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-5">
                      <Calendar className="text-primary mt-1 w-6 h-6 shrink-0" />
                      <div>
                        <p className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-1">Tanggal</p>
                        <p className="font-sans text-[16px] text-on-surface">Sabtu, 24 Agustus 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <Clock className="text-primary mt-1 w-6 h-6 shrink-0" />
                      <div>
                        <p className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-1">Waktu</p>
                        <p className="font-sans text-[16px] text-on-surface">19:00 - Selesai WIB</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <Building2 className="text-primary mt-1 w-6 h-6 shrink-0" />
                      <div>
                        <p className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-1">Tempat</p>
                        <p className="font-sans text-[16px] text-on-surface">Grand Ballroom, Hotel Mulia Senayan</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Location / Street View Section */}
          <section className="py-[120px] px-4 md:px-6 max-w-[1200px] mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[40px] md:text-[48px] font-semibold text-white mb-2">Lokasi Resepsi</h2>
              <div className="w-12 h-1 bg-primary mx-auto shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
            </div>

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="glass-card p-4 overflow-hidden relative group"
            >
              <div className="aspect-video w-full relative overflow-hidden border border-fuchsia-900/30 group-hover:border-primary-electric/30 transition-colors duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1776917582461!6m8!1m7!1sysVQ74sz5n6ZvUYWpRZYTg!2m2!1d-7.442355586394973!2d109.513077476752!3f335.28043020720423!4f-20.23942640551479!5f0.7820865974627469" 
                  className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Overlay Text - Pointer events none so it doesn't block interactions */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pointer-events-none">
                  <div className="flex items-center gap-3 bg-black/60 px-4 py-2 backdrop-blur-md rounded-none border border-white/10">
                    <MapPin className="w-5 h-5 text-primary-electric drop-shadow-[0_0_8px_rgba(255,0,127,1)]" />
                    <div>
                        <p className="font-serif text-[14px] md:text-[18px] font-bold text-white tracking-widest uppercase">Peta & Rute</p>
                        <p className="font-sans text-[10px] text-white/70 uppercase tracking-widest">Tempat Resepsi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 mb-4">
                <a 
                  href="https://maps.app.goo.gl/2Ur8hcXKBVEZK76S6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary-glow px-8 py-3 font-sans text-[12px] font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer"
                >
                  <Navigation size={16} />
                  Buka Petunjuk Arah
                </a>
              </div>
            </motion.div>
          </section>

          {/* RSVP Form Section */}
          <section id="rsvp" className="py-[120px] bg-background-dark relative border-t border-fuchsia-900/20">
            <div className="max-w-[768px] mx-auto px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-16 border-t-2 border-t-primary-electric"
              >
                <div className="text-center mb-12">
                  <h2 className="font-serif text-[40px] md:text-[48px] font-semibold text-white mb-4">Kehadiran Anda</h2>
                  <p className="font-sans text-[16px] text-on-surface-variant">Merupakan suatu kehormatan bagi kami jika Anda berkenan hadir.</p>
                </div>

                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
                  <input type="hidden" name="access_key" value="defb7b45-5d65-45ea-8370-4e87bb4c190a" />
                  
                  <div>
                    <label className="block font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      className="input-minimal w-full py-3 text-lg font-sans placeholder:text-white/20 bg-white/5 border-fuchsia-900/30 px-4"
                      placeholder="Tuliskan nama Anda..."
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <label className="block font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input-minimal w-full py-3 text-lg font-sans placeholder:text-white/20 bg-white/5 border-fuchsia-900/30 px-4"
                      placeholder="Tuliskan email Anda..."
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <label className="block font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-6">Konfirmasi Kehadiran</label>
                    <div className="space-y-4">
                      <label className="flex items-center gap-4 cursor-pointer group w-fit">
                        <div className="relative flex items-center justify-center">
                           <input
                            type="radio"
                            name="attendance"
                            value="Hadir"
                            className="peer appearance-none w-5 h-5 border border-fuchsia-900/50 rounded-sm checked:border-primary-electric checked:bg-primary-electric/20 transition-all cursor-pointer"
                            defaultChecked
                          />
                          <div className="absolute opacity-0 peer-checked:opacity-100 pointer-events-none w-2 h-2 bg-primary-electric" />
                        </div>
                        <span className="font-sans text-[16px] text-on-surface group-hover:text-white transition-colors">Yakin, Saya akan Hadir</span>
                      </label>
                      <label className="flex items-center gap-4 cursor-pointer group w-fit">
                         <div className="relative flex items-center justify-center">
                           <input
                            type="radio"
                            name="attendance"
                            value="Tidak Hadir"
                            className="peer appearance-none w-5 h-5 border border-fuchsia-900/50 rounded-sm checked:border-primary-electric checked:bg-primary-electric/20 transition-all cursor-pointer"
                          />
                          <div className="absolute opacity-0 peer-checked:opacity-100 pointer-events-none w-2 h-2 bg-primary-electric" />
                        </div>
                        <span className="font-sans text-[16px] text-on-surface group-hover:text-white transition-colors">Maaf, Tidak dapat Hadir</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <label className="block font-sans text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Pesan Spesial</label>
                    <textarea
                      name="message"
                      className="input-minimal w-full py-3 text-lg font-sans placeholder:text-white/20 resize-none bg-white/5 border-fuchsia-900/30 px-4"
                      placeholder="Tuliskan doa & harapan untuk kami..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="pt-8">
                    <button type="submit" className="btn-primary-glow w-full py-4 md:py-5 font-sans text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-center block">
                      Kirim Reservasi
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full py-16 border-t border-fuchsia-900/20 bg-background-dark relative z-10">
          <div className="flex flex-col items-center justify-center gap-8 px-4 w-full text-center">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <a href="#" className="font-serif text-[10px] tracking-widest uppercase text-white/30 hover:text-primary-electric transition-colors duration-300">
                Hubungi Kami
              </a>
              {/* Optional secondary links could go here */}
            </div>
            <p className="font-serif text-[10px] tracking-widest uppercase text-white/40">
              © 2024 ETERNITY WEDDINGS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>

      {/* Floating Music Button */}
      <AnimatePresence>
        {isOpened && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 backdrop-blur-md rounded-none border flex items-center justify-center transition-all ${
              isPlaying 
                ? 'bg-primary-electric/20 border-primary-electric text-primary-electric shadow-[0_0_15px_rgba(255,0,127,0.3)]' 
                : 'bg-surface-dim/80 border-fuchsia-900/50 text-white/50 hover:text-white hover:border-primary-electric/50'
            }`}
            onClick={toggleMusic}
            aria-label="Toggle music"
          >
            {isPlaying ? <Music size={24} /> : <Music4 size={24} />}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
