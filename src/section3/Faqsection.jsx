import "./Faqsection.css"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Faqsection = () => {
    return (
        <div>
            <div className='headerrr'>

            </div>
            <div className='w-[70%] flex flex-col gap-5 ml-[15%] pt-[60px] pl-[90px] pr-[90px] bg-white relative bottom-[100px]'>
                <div className="flex flex-col gap-4">
                <h1 className="flex justify-center text-[40px] font-bold">Sual-Cavab</h1>
                <p className="flex justify-center text-gray-500">Əsas Sual-Cavab</p>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography >Kofe.al nədir?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Kofe.al, pərəstişkarlarınızdan birbaşa gəlir əldə etməyiniz üçün ən sadə yoldur. Siz bəxşişlər qəbul edə, üzvlük səviyyələri
                            yarada, onlayn mağaza aça və 9% platforma haqqı ilə komissiya ala bilərsiniz.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Kofe.al kimlər üçündür?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Sənətkarlar, Rəssamlar, Streamerlər, Podkastçılar, Yazıçılar, Fotoqraflar, Kinorejissorlar, İnfluencerlər və hər cür yaradıcı
                            şəxslər Kofe.al-dan istifadə edirlər.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Ödənişi necə alacağam?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Bəxşiş ödənişləri növbəti gün sizin bank kartınıza köçürüləcək. Məhsul və xidmət satışından əldə edilən gəlirlər isə VÖEN-
                            li bank hesabınıza köçürülür. Bu qədər sadə!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Xidmət haqqı nə qədərdir?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Biz bütün əməliyyat haqları və komissiyamız daxil olmaqla 9% komissiya alırıq.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Ödənilən vəsaitlər ilə kofe almalıyam?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Təbii ki, yox! Biz qəhvəni sevirik, amma bu, sadəcə dostluq metaforasıdır. Sadəcə, işinizi dəstəkləmək üçün pərəstişkarlarından "qəhvə almağı" xahiş etmək sadəcə "ianə vermək"dən daha bəsitdir. Siz həmçinin "qəhvə"ni öz zövqünüzü uyğun başqa bir şeyə dəyişə bilərsiniz. Məsələn kofe əvəzinə; çay, dönər, hamburger, su və ya pizza istəyə bilərsiniz.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Kofe.al ilə nə qədər qazana bilərəm?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Hər şey sizin izləyici və pərəstişkarlarınız ilə münasibət və kommunikasiyadan asılıdır. Kofe.al olaraq toplanacaq məbləğə heç bir limit tətbiq etmirik. Yetər ki, siz yaradın, paylaşın, satın və qazanın.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Kofe.al xarici analoqlardan fərqi nədir?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Patreon, BMC, Ko-fi kimi xarici analoqlardan əsas fərqimiz həm yaradıcı şəxslərn, həm də pərəstişkarlar üçün verdiyi üstünlüklər və dil seçimidir. Yaradıcı şəxslər xarici analoqlardan ödənişləri almaq üçün Azərbaycanda aktiv olmayan PayPal və Stripe kimi platformalardan ödənişləri almaq məcburiyyətindədilər. Pərəstişkarlar isə xarici ödəniş sistemləri ilə ödəniş etdiklərində əlavə 18% ƏDV vergisi ödəmək məcburiyyətində qaldıqlarından, ödəmələrin miqdarı daha az olur. Kofe.al ilə isə əlavə komissiya olmadan, yerli bank kartınıza ödəniş ala bilərsiniz.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Xarici pərəstişkarlarımdan bəs ödəniş ala bilərəm?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Bəli, biz stripe və PayPal ilə də ödənişlər alaraq, sizin hesabınıza köçürə bilərik. Hazırda bu xidmət üzərində işlər aparılır və komissiya dərəcələri təyin edildikdən sonra, təqdim ediləcək.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Kofe.al kimindir?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Kofe.al layihəsi ABŞ-da qeydiyyatdan keçmiş BonPara Inc. şirkətinin Azərbaycandakı nümayəndəliyi olan BonPara MMC şirkətinin layihəsidir. Komanda və şirkətimiz 500 Global Akselerasiya proqramının məzunu və bir çox startup müsabiqələrin qalibidir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={"+"}

                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Sizin xeyriniz nədir?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            BonPara olaraq şirkətimiz e-ticarət, onlayn ödənişlər və loyallıq proqramı üzrə müxtəlif həllər üzərində çalışır. Kofe.al bizim ilk sub layihəmizdir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>

    )
}

export default Faqsection