import React from "react";
import "./legal-notice.scss";
import LegalNoticeContent from "./LegalNoticeContent";

const LegalNotice = () => (
	<div className="legalnotice">
		<div className="legalnotice__title">Mentions légales</div>

		<div className="legalnotice__content">
			<div className="legalnotice__content_presentation">
				<LegalNoticeContent
					titre="Présentation du site"
					text="En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site www.ofarm.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi. Le présent site est édité par Florian NGUYEN, particulier domicilié à Toulouse."
				/>
			</div>

			<div className="legalnotice__content_propriete">
				<LegalNoticeContent
					titre="Propriété intellectuelle et contrefaçons"
					text="O'Farm est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment : les textes, les images, les graphismes, le logo, les icônes, etc. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de O'Farm. Toute exploitation non autorisée du site ou d’un quelconque élément qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle."
				/>
			</div>

			<div className="legalnotice__content_cookies">
				<LegalNoticeContent
					titre="Cookies et traceurs"
					text="Le site internet www.ofarm.fr possède ne possède pas de système de mesure d’audience, ni de fonction de partage sur les réseaux sociaux. En application de la directive européenne dite « paquet télécom », les internautes doivent être informés et donner leur consentement préalablement à l’insertion de traceurs (plus couramment appelés « cookies »). Les internautes doivent disposer d’une possibilité de choisir de ne pas être tracés lorsqu’ils visitent un site ou utilisent une application. Les éditeurs de sites internet ont donc l’obligation de solliciter au préalable le consentement des utilisateurs. Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’internaute peut toutefois configurer son navigateur internet pour refuser l’installation des cookies."
				/>
			</div>

			{/* <div className="legalnotice__content_audience">
				<LegalNoticeContent
					titre="Mesure d’audience"
					text="Les cookies de mesure d’audience sont de petits fichiers qui permettent de connaitre et d’analyser les statistiques de trafic sur le site internet : les pages visitées, le nombre de visites, le taux de rebond, la provenance des visites,… Les cookies de mesure d’audience sont totalement anonymes.Sur ce site, c’est la solution Google Analytics qui est utilisée pour mesurer l’audience."
				/>
			</div>

			<div className="legalnotice__content_reseaux">
				<LegalNoticeContent
					titre="Réseaux sociaux"
					text="Les cookies liés aux réseaux sociaux sont associés aux boutons qui facilitent le partage des pages et articles sur les réseaux sociaux."
				/>
			</div> */}

			<div className="legalnotice__content_formulaire">
				<LegalNoticeContent
					titre="Formulaire de contact et commentaires"
					text="Vous pouvez être amené à nous indiquer votre adresse e-mail lorsque vous remplissez notre formulaire de contact ou déposez un commentaire sur l’un des articles du site site www.ofarm.fr.En aucun cas, votre adresse e-mail ne sera cédée à des tiers."
				/>
			</div>

			{/* <div className="legalnotice__content_moderation">
				<LegalNoticeContent
					titre="Modération des commentaires"
					text="Le choix de validation d’un commentaire sur le site www.ofarm.fr est laissé à l’entière appréciation du responsable de publication. Les commentaires peuvent être supprimés, modifiés et corrigés pour une meilleure compréhension des visiteurs (notamment pour l’orthographe).

L’internaute peut signer son commentaire de son nom ou pseudo ou nom de son entreprise. Il peut également renseigné une URL dans le champ « site web ». Ce lien peut ne pas apparaitre si il a été jugé que le commentaire n’apportait pas réellement de plus value à l’article. Ceci, même si le commentaire est publié.

Voici des exemples de cas ou un commentaire peut-être modéré ou supprimé :

Il a été supprimé par l’anti-spam

Il n’apporte pas réellement de plus value et n’est pas utile pour les internautes

Il est truffé de fautes d’orthographe ou incompréhensible

Il semble être déposé uniquement dans un but auto-promotionnel

Le mail indiqué est visiblement faux

Il est jugé diffamatoire pour un tiers"
				/>
			</div> */}

			{/* <div className="legalnotice__content_newsletter">
        <LegalNoticeContent
          titre="Newsletter"
          text="Vous pouvez vous abonner à la newsletter du site. Vous recevez alors automatiquement et gratuitement des newsletters traitants les sujets du site www.ofarm.fr.
Vous pouvez vous désinscrire à tout moment de la newsletter en cliquant sur le lien de désabonnement présent en bas de chaque newsletter.
En aucun cas, votre adresse e-mail ne sera cédée à des tiers."
        />
      </div> */}

			<div className="legalnotice__content_liens">
				<LegalNoticeContent
					titre="Liens hypertextes"
					text="Ce site internet contient un certain nombre de liens hypertextes vers d’autres sites. Cependant, www.ofarm.fr n’a pas la possibilité de suivre et vérifier le contenu de ces sites, et n’assumera en conséquence aucune responsabilité de ce fait."
				/>
			</div>

			{/* <div className="legalnotice__content_flux">
        <LegalNoticeContent titre="Flux RSS" text="Les flux RSS sont exclusivement destinés aux visiteurs du site pour une utilisation personnelle et ne sauraient en aucun cas servir à alimenter d’autres sites, sauf autorisation écrite préalable de www.ofarm.fr." />
      </div> */}
		</div>
	</div>
);

export default LegalNotice;
