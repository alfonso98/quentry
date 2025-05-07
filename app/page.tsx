'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/ui/icarus/landing.module.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';

const Page = () => {

    const [dialog1, setDialog1] = useState(false);
    const [dialog2, setDialog2] = useState(false);

    const handleOpenDialog1 = () => {
        setDialog1(true);
    }; 

    const handleCloseDialog1 = () => {
        setDialog1(false);
    };

    const handleOpenDialog2 = () => {
        setDialog2(true);
    };

    const handleCloseDialog2 = () => {
        setDialog2(false);
    };


    return (
        <div className={styles.mainContainer}>
            
            <div className={styles.posterContainer}>
                
                <div className={styles.logoContainer}>
                    <Image
                        src="/logoFestival.png"
                        width={1605}
                        height={542}
                        alt="Logo del festival del embudo"
                        className={styles.festivalLogo}
                    />
                </div>

                <div className={styles.festivalDate}>
                    <h3>17 de mayo de 2025 | 5:00 pm a 9:00 pm</h3>
                    {/* <h3></h3> */}
                    <h3>
                        <a
                            href="https://www.google.com/maps?q=20.6977458,-103.3739929"
                            target="_blank"
                            className={styles.locationLink}
                        >
                            Av. Américas 1254, col. Country Club, Gdl. Jalisco
                        </a>
                        
                    </h3>
                    
                    <Link
                        href='/festivalDelEmbudo'
                        className={styles.mainCallToAction}
                    >
                        ¡ Aparta tu lugar !
                    </Link>
                </div>

                <div className={styles.cartelContainer}>
                    <Image
                        src="/cartelFestival.PNG"
                        width={3858}
                        height={5950}
                        alt="Cartel del Festival del embudo"
                        className={styles.festivalCartel}
                    />
                </div>

                <div className={styles.festivalEvents}>

                    <div className={styles.eventCard}>
                        <EmojiEventsIcon sx={{ fontSize: 40 }}/>
                        <p>Especta y admira el Torneo del Método IKEA.</p>
                    </div>

                    <div className={styles.eventCard}>
                        <LocalCafeIcon sx={{ fontSize: 40 }}/>
                        <p>Degusta 9 proyectos de café de especialidad de distintos estados del país.</p>
                    </div>

                    <div className={styles.eventCard}>
                        <ShoppingBagIcon sx={{ fontSize: 40 }}/>
                        <p>Compra deliciosos postres, cerveza, vinilos, merch, café en grano para tu casa y mucho más.</p>
                    </div>

                </div>

                <div className={styles.festivalOrganizers}>

                    <h1 className={styles.sectiontitle}>Nuestros Organizadores</h1>

                    <div className={styles.organizersList}>

                        <div className={styles.organizarLogoContainer}>
                            <Image
                                src="/icarus.png"
                                width={724}
                                height={317}
                                alt="Logo de Icarus Café"
                            />
                            <a 
                                href='https://www.instagram.com/icaruscafe?igsh=MTFyYnpveDVzZHZnZQ=='
                                target='_blank'
                                className={styles.organizerLogo}
                            >
                                <IconButton>
                                    <InstagramIcon/>
                                </IconButton>
                            </a>
                        </div>

                        <div className={styles.organizarLogoContainer}>
                            <Image
                                src="/barbo.png"
                                width={815}
                                height={292}
                                alt="Logo de Barbo Café"
                            />
                            <a 
                                href='https://www.instagram.com/barbo.coffee?igsh=MTQyZGwxZ3IzZXpudQ=='
                                target='_blank'
                                className={styles.organizerLogo}
                            >
                                <IconButton>
                                    <InstagramIcon/>
                                </IconButton>
                            </a>
                        </div>
                        
                        <div className={styles.organizarLogoContainer}>
                            <Image
                                src="/eratio.png"
                                width={679}
                                height={403}
                                alt="Logo de Eratio Café"
                            />
                             <a 
                                href='https://www.instagram.com/erratio_cafe?igsh=OGxjdTA3ZmJ1MjM0'
                                target='_blank'
                                className={styles.organizerLogo}
                            >
                                <IconButton>
                                    <InstagramIcon/>
                                </IconButton>
                            </a>
                        </div>

                    </div>

                </div>

                <div className={styles.festivalParticipants}>
                    
                    <div>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <CelebrationIcon sx={{ fontSize: 40 }}  className={styles.partyIcon}/>
                            <h1 className={styles.sectiontitle}>Cafés Invitados</h1>
                        </Stack>
                        
                    </div>

                    <div>
                        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Chip label="Triste Tigre" sx={{ background: '#FFCF00', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="Aida Café" sx={{ background: '#A5C000', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="600 Micras" sx={{ background: '#FF161A', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="La Prisa Mata" sx={{ background: '#FFCF00', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="Ototo Café" sx={{ background: '#A5C000', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="Denso Café" sx={{ background: '#FF161A', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="Erratio Café" sx={{ background: '#FFCF00', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="Casa Cortés | Barbo" sx={{ background: '#A5C000', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                            <Chip label="Icarus Café | Casa en Llamas" sx={{ background: '#FF161A', fontSize: { xs: '1rem', md: '2rem' }, height: 'auto' }} />
                        </Stack>
                    </div>

                </div>

                <div className={styles.festivalTickets}>

                    <h1 className={styles.sectiontitle}>¿Qué incluye tu boleto?</h1>
                    
                    <div className={styles.ticketCard}>

                        <h2>$210</h2>
                        <p>Precio por persona</p>
                        <p className={styles.lineDivider}>IVA Incluido</p>


                        <ul className={styles.lineDivider}>
                            <li>1 Tostada de Aguachile</li>
                            <li>1 Cerveza Fortuna de 360ml</li>
                            <li>Acceso a la degustación de 9 cafés de especialidad</li>
                            <li>Acceso de espectador al Torneo de Método IKEA</li>
                        </ul>

                        <p>*Acceso limitado a 150 personas</p>

                        <Link className={styles.mainCallToAction} href="/festivalDelEmbudo">
                            ¡ Aparta tu lugar !
                        </Link>

                    </div>

                </div>

                <div className={styles.footerContainer}>
                    <p onClick={handleOpenDialog1}>FAQs</p>
                    <p onClick={handleOpenDialog2}>Contacto</p>
                </div>
                        
            </div>

            <Dialog open={dialog1} onClose={handleCloseDialog1}>

                <DialogTitle> Preguntas Frecuentes</DialogTitle>

                <IconButton
                    aria-label="close"
                    onClick={handleCloseDialog1}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                    >
                    <CloseIcon />
                </IconButton>

                <DialogContent>

                    <div className={styles.faqContainer}>

                        <ul>

                            <li>
                                <b>¿Puedo llevar a mi mascota?</b><br/>
                                Lamentablemente no. No se puede ingresar con mascotas (perros, gatos, urones, etc).
                            </li>

                            <li>
                                <b>¿Se admiten menores de edad?</b><br/>
                                No se admiten menores de edad.
                            </li>

                            <li>
                                <b>¿Tengo que llegar puntual?</b><br/>
                                No, puedes llegar en un horario entre 5 a 9 pm. Se te respetará las bebidas y alimentos que incluya tu boleto.
                            </li>

                            <li>
                                <b>¿Puedo apartar por efectivo o transferencia?</b><br/>
                                No. Solo se puede pagar a través del sitio web Quentry.
                            </li>

                            <li>
                                <b>¿Puedo pagar el mero día?</b><br/>
                                No. La fecha límite para pagar es un día antes del evento, viernes 16 de mayo de 2025.
                            </li>
                        
                            <li>
                                <b>¿Tengo que ver a fuerzas el Torneo de Método IKEA?</b><br/>
                                No es necesario. Tendremos stands con degustaciones gratuitas de café, así mismo habrá venta de café en grano, vinilos, postres, cerveza y merch de las marcas participantes.
                            </li>

                        </ul>
                    </div>
                    
                </DialogContent>

            </Dialog>

            <Dialog open={dialog2} onClose={handleCloseDialog2}>

                <DialogTitle> Contacto</DialogTitle>

                <IconButton
                    aria-label="close"
                    onClick={handleCloseDialog2}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                    >
                    <CloseIcon />
                </IconButton>

                <DialogContent>

                    <div className={styles.faqContainer}>

                        <ul>

                            <li>
                                <b>
                                    <a href="tel:+5213331009494">133 3100 9494</a>
                                </b>
                            </li>

                            <li>
                                <b>
                                    <a href="mailto:isaac@icaruscafe.com?subject=Información%20|%20Festival%20del%Embudo">isaac@icaruscafe.com</a>
                                </b>
                            </li>

                        </ul>

                    </div>

                </DialogContent>

            </Dialog>
            
        </div>    
    );
};

export default Page;