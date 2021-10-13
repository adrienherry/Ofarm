import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>S'informer avant de démarrer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textJustify: 'inter-word', textAlign: 'justify' }}>
            Il ne suffit pas de jeter quelques graines sur le sol ! Pour connaître les bases et éviter
            certaines bétises, on peut lire un livre, suivre une formation, visiter des jardins...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Commencer petit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textJustify: 'inter-word', textAlign: 'justify' }}>
            Un coin de balcon ou de jardin suffit pour débuter. On respecte les distances de
            plantation: une petite graine peut devenir un potiron qui court sur 4 mètres !
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Évaluer le temps qu'on peut y consacrer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textJustify: 'inter-word', textAlign: 'justify' }}>
            un potager demande un certain suivi tout au long de la saison. Il faut être réaliste sur
            le temps dont on dispose, surtout avec l'appel estival des vacances , des sorties...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Planter ce que l'on aime manger</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textJustify: 'inter-word', textAlign: 'justify' }}>
            Le but c'est de se nourrir. Alors on résiste aux promos 5+1 gratuit 
            sur les choux ou les radis si on n'est pas fan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Jardiner au naturel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textJustify: 'inter-word', textAlign: 'justify' }}>
            On oublie les pesticides. À la place, on apprend à utiliser les
            atouts de la nature. Ils sont sains, écologiques et gratuits !
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Faire un carnet de suivi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textJustify: 'inter-word', textAlign: 'justify' }}>
            Pratique pour les années futures, on y note le choix des plantes,
            les dates, les petits soucis, les récoltes, si on a aimé telle variété...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
