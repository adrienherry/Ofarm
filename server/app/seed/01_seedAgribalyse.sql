BEGIN;

INSERT INTO "user" (
   username,
   email,
   hashed_password)
VALUES (
   'florian',
   'florian@mail.fr',
   '$2b$10$/kmbu0zXpMnmFuvIuz6B2ujKbpAVN3613tLpwb5nUm26nIvtkJ2Q.'),
(
   'nicolas',
   'nicolas@mail.com',
   '$2b$10$/kmbu0zXpMnmFuvIuz6B2ujKbpAVN3613tLpwb5nUm26nIvtkJ2Q.'),
(
   'bob',
   'bob@mail.com',
   '$2b$10$/kmbu0zXpMnmFuvIuz6B2ujKbpAVN3613tLpwb5nUm26nIvtkJ2Q.');

INSERT INTO "event_type" (
   name,
   color)
VALUES (
   'Semis sous abri',
   '#23cdff'),
(
   'Semis en pleine terre',
   '#00b329'),
(
   'Repiquage',
   '#d06f81'),
(
   'Récolte',
   '#ffbf46');

INSERT INTO "water_need" (
   name,
   value)
VALUES (
   'faible',
   1),
(
   'moyen',
   2),
(
   'fort',
   3);

INSERT INTO "culture_type" (
   name)
VALUES (
   'en pot'),
(
   'en serre'),
(
   'en pleine terre');

INSERT INTO "exposition" (
   name,
   value)
VALUES (
   'ombre',
   1),
(
   'mi-ombre',
   2),
(
   'ensoleillée',
   3),
(
   'plein soleil',
   4);

INSERT INTO "soil_type" (
   name)
VALUES (
   'argileux'),
(
   'caillouteux'),
(
   'calcaire'),
(
   'drainé'),
(
   'frais'),
(
   'humide'),
(
   'lourd'),
(
   'humifère'),
(
   'léger'),
(
   'meuble'),
(
   'réchauffé'),
(
   'riche'),
(
   'sableux'),
(
   'tout type');

INSERT INTO "species" (
   name,
   description,
   image_url,
   color,
   co2_data)
VALUES (
   'Aubergine',
   'L’aubergine (Solanum melongena L.) est une plante dicotylédone de la famille des Solanaceae. Le terme aubergine désigne la plante et le fruit. Elle est originaire d''Asie et constitue avec les aubergines africaines: S. aethiopicum L., aubergine amère, ou gilo, et S. macrocarpon L., ou gboma, les trois espèces d''aubergines cultivées. L''aubergine est un légume-fruit riche en composés phénoliques et alcaloïdes antioxydants aux effets favorables sur le syndrome métabolique, elle est l''objet de nombreuses publications scientifiques.',
   'https://images.unsplash.com/photo-1613881553903-4543f5f2cac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1NzgzNTc&ixlib=rb-1.2.1&q=80&w=400',
   '#477675',
   '{"original_name":"Aubergine, crue","short_name":"Aubergine","LCI_name":"Eggplant, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":5.3103591,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":5.0919415,"transform":0,"packaging":0,"transport":0.16952471,"distribution":0.036575546,"consumption":0.012317297}}' ::json),
(
   'Betterave',
   'La betterave, Beta vulgaris subsp. vulgaris, est une sous-espèce de plantes de la famille des Amaranthaceae, cultivées pour leurs racines charnues, et utilisées pour la production du sucre, comme légume dans l''alimentation humaine, comme plantes fourragères, et plus récemment comme carburant avec le bioéthanol. Il existe de nombreuses variétés, classées différemment selon les types: Les betteraves sucrières sont les plus riches en sucres, de couleur blanche et très enterrées. Les betteraves fourragères très productives, de différentes couleurs, de différentes formes et plus ou moins enterrées, les betteraves potagères, également appelées betterave rouge, “racine rouge',
   'https://images.unsplash.com/photo-1573426667638-18ccdd988a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#e03a20',
   '{"original_name":"Betterave rouge, crue","short_name":"Betterave rouge","LCI_name":"Beetroot, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.24930031,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.072311127,"transform":0,"packaging":0,"transport":0.14056627,"distribution":0.024105619,"consumption":0.012317297}}' ::json),
(
   'Carotte',
   'La Carotte (Daucus carota subsp. sativus) est une plante bisannuelle de la famille des Apiacées (aussi appelées Ombellifères), largement cultivée pour sa racine pivotante charnue, comestible, de couleur généralement orangée, consommée comme légume. La carotte représente, après la pomme de terre, le principal légume-racine cultivé dans le monde. C''est une racine riche en carotène.',
   'https://images.unsplash.com/photo-1602496875335-b0fc93069cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#5fe343',
   '{"original_name":"Carotte, crue","short_name":"Carotte","LCI_name":"Carrot, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.38690672,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.087677241,"transform":0,"packaging":0,"transport":0.1704366,"distribution":0.029228063,"consumption":0.099564814}}' ::json),
(
   'Céleri-rave',
   'Le céleri-rave (Apium graveolens L. var. rapaceum (Mill.) Gaudin), est une plante herbacée biannuelle de la famille des Apiacées (ou Ombellifères), tribu des Apieae. Elle est cultivée comme plante potagère pour la base de sa tige tubérisée consommée comme légume. C''est une variété de céleri. Le céleri-rave préfère un sol frais, riche en humus et bien ameubli et un climat tempéré, sans chaleur excessive, ni gelées précoces. Il ne supporte pas le manque d''eau.',
   'https://images.unsplash.com/photo-1575286368486-a9bd023a3d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#9e4cdf',
   '{"original_name":"Céleri-rave, cru","short_name":"Céleri-rave","LCI_name":"Celeriac, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.38690672,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.087677241,"transform":0,"packaging":0,"transport":0.1704366,"distribution":0.029228063,"consumption":0.099564814}}' ::json),
(
   'Chou-fleur',
   'Le chou-fleur est une variété de choux de la famille des Brassicacées, cultivée comme plante potagère pour son méristème floral hypertrophié et charnu, consommé comme légume. Le terme désigne aussi ce légume. Il s''agit d''une variété du chou commun (Brassica oleracea), issue de plusieurs siècles de sélection. Le chou-fleur est une plante herbacée bisannuelle qui produit une boule blanche tendre et compacte.Cette boule est un méristème, un organe pré-floral qui, si on le laisse évoluer, continue sa croissance en tiges florales qui porteront des fleurs jaunes ou blanches, typiques du genre Brassica, puis finalement les graines.',
   'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#9edf3d',
   '{"original_name":"Chou-fleur, cru","short_name":"Chou-fleur","LCI_name":"Cauliflower, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.50990048,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.30959852,"transform":0,"packaging":0,"transport":0.14056627,"distribution":0.047418395,"consumption":0.012317297}}' ::json),
(
   'Concombre',
   'Le concombre (Cucumis sativus) est une plante potagère herbacée, rampante, de la même famille que la calebasse africaine, le melon ou la courge (famille des Cucurbitacées). C''est botaniquement un fruit qui est consommé comme un légume. Il est de la même espèce (Cucumis sativus) que le cornichon, consommé lui comme condiment. La plante, qui poussait naturellement au pied de l''Himalaya, aurait été domestiquée pour la première fois en Inde il y a au moins 3 000 ans.',
   'https://images.unsplash.com/photo-1523349462262-054f5b3aa500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#d646c5',
   '{"original_name":"Concombre, pulpe et peau, cru","short_name":"Concombre","LCI_name":"Cucumber, pulp and peel, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":4.8565886,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":4.5332143,"transform":0,"packaging":0,"transport":0.18387334,"distribution":0.03993612,"consumption":0.099564814}}' ::json),
(
   'Courgette',
   'La courgette est une plante herbacée de la famille des Cucurbitaceae, c''est aussi le fruit comestible de la plante du même nom. C''est un fruit courant en été, la fleur de courgette est aussi utilisée en cuisine. Les différentes variétés de courgettes sont des cultivars de l''espèce Cucurbita pepo, et de la sous-espèce Cucurbita pepo subsp. pepo dont fait partie aussi la citrouille véritable. La courgette appartient à la famille des cucurbitacées. C''est une plante potagère qui pousse au sol ; elle possède de grandes feuilles. Elle a des fleurs de couleur jaune, qui donnent le fruit appelé également courgette. On la cultive en potager ou en serre, selon le mode de production.',
   'https://images.unsplash.com/photo-1563252722-6434563a985d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#5cd76c',
   '{"original_name":"Courgette, pulpe et peau, crue","short_name":"Courgette","LCI_name":"Courgette or zucchini, pulp and peel, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.40570914,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.21625003,"transform":0,"packaging":0,"transport":0.14056627,"distribution":0.036575546,"consumption":0.012317297}}' ::json),
(
   'Epinard',
   'L''épinard (Spinacia oleracea) est une plante potagère, annuelle ou bisannuelle, de la famille des Chenopodiaceae ou des Amaranthaceae selon les classifications. Originaire d''Iran (il tire son nom du persan اسفناج āsfanāǧ), il est aujourd''hui cultivé dans toutes les régions tempérées pour ses qualités nutritionnelles. Il est célébré dans la bande dessinée Popeye comme un légume riche en fer qui donne sa force au héros, bien qu''en réalité sa teneur en fer ne soit pas particulièrement élevée.',
   'https://images.unsplash.com/photo-1576045057995-568f588f82fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#6b68df',
   'null' ::json),
(
   'Fève',
   'Les fèves sont des plantes annuelles légumineuses de la famille des Fabaceae, sous-famille des Faboideae, tribu des Fabeae. Comme les fèveroles, les fèves cultivées ont comme origine l''espèce botanique Vicia faba. Le terme désigne aussi la graine qui, consommée à l''état frais ou sec, est l''un des légumes les plus anciennement cultivés. On la cultive pour ses graines comestibles, tout particulièrement autour du Bassin méditerranéen ainsi que maintenant dans de nombreux pays où elle est utilisée fraîche ou sèche.',
   'https://images.unsplash.com/photo-1605402966404-ec40b9bd5009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#dfe83c',
   'null' ::json),
(
   'Haricot nain',
   'Le haricot nain fait partie de la famille des haricots, idéal pour son potager! Il en existe de toutes les couleurs: jaune, blanc, vert, pourpre, beige. On peut tout à fait le semer près de certains légumes comme les carottes ou les choux. L''idéal est de le récolter suffisamment tôt pour ne récupérer aucun fil. Sa taille pourra atteindre une quarantaine de centimètres au maximum.',
   'https://images.unsplash.com/photo-1594404124434-719a41b02af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#5979cd',
   'null' ::json),
(
   'Laitue',
   'La Laitue (Lactuca), au sens botanique du terme, est un genre de plantes annuelles et bisannuelles de la famille des Astéracées (Composées) dont certaines espèces sont cultivées pour leurs feuilles tendres consommées comme salade verte. Ce genre comprend plus de 100 espèces. La laitue la plus cultivée est la laitue cultivée (Lactuca sativa) à partir de laquelle les jardiniers ont sélectionné de nombreuses variétés et cultivars.',
   'https://images.unsplash.com/photo-1549736624-81a2ca809ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#e4bf30',
   '{"original_name":"Laitue, crue","short_name":"Laitue","LCI_name":"Lettuce, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.88251448,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.31309977,"transform":0,"packaging":0,"transport":0.2272488,"distribution":0.076659738,"consumption":0.26550617}}' ::json),
(
   'Mâche',
   'La mâche (Valerianella locusta) est une petite plante herbacée annuelle de la famille des Caprifoliaceae (anciennement Valerianaceae), originaire de l’Afrique, de l’Amérique du Nord et de l’Eurasie. C''est de cette espèce que sont issues les variétés cultivées consommées le plus souvent crues en salades.',
   'https://cdn.pixabay.com/photo/2014/02/12/18/11/lettuce-264826_960_720.jpg',
   '#955ba6',
   '{"original_name":"Mâche, crue","short_name":"Mâche","LCI_name":"Lamb''s lettuce, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.88251448,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.31309977,"transform":0,"packaging":0,"transport":0.2272488,"distribution":0.076659738,"consumption":0.26550617}}' ::json),
(
   'Melon',
   'Le melon (Cucumis melo) est une plante herbacée annuelle originaire d''Afrique intertropicale, appartenant à la famille des Cucurbitacées et largement cultivée comme plante potagère pour son faux-fruit comestible. La tige n''est pas volubile mais la plante peut grimper en s''accrochant à des supports grâce à des vrilles simples. Les feuilles sont généralement entières assez arrondies, parfois assez fortement découpées. Le terme désigne aussi le fruit climactérique lui-même très savoureux, sucré et parfumé.',
   'https://images.unsplash.com/photo-1630526909851-196624edbbcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#67a92d',
   '{"original_name":"Melon cantaloup (par ex.: Charentais, de Cavaillon) pulpe, cru","short_name":"Melon cantaloup","LCI_name":"Melon, cantaloupe (ex Cavaillon or Charentais melon), pulp, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"fruits","co2_total":0.87227002,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.30901715,"transform":0,"packaging":0,"transport":0.24449853,"distribution":0.05324816,"consumption":0.26550617}}' ::json),
(
   'Navet d''automne',
   'Le navet, Brassica rapa L. subsp. rapa (du latin napus : chou-navet, rapum : rave, bulbe de racine ; du grec ράπυς, ράπυος : rave, navet), est une plante herbacée de la famille des Brassicacées, cultivée comme plante potagère ou fourragère pour sa racine charnue allongée ou arrondie, consommée comme légume. Les navets d’automne se sèment de juillet à septembre et se récoltent une fois murs.',
   'https://images.unsplash.com/photo-1631909808696-969b7aa7ade9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#d04d93',
   'null' ::json),
(
   'Oignon',
   'L''oignon ou ognon (Allium cepa) est une espèce de plantes herbacées bisannuelles de la famille des Amaryllidaceae, longtemps cultivée comme plante potagère pour ses bulbes de saveur et d''odeur fortes ou pour ses feuilles. Le terme désigne aussi le bulbe de cette plante récolté comme légume. L''oignon est utilisé à la fois comme légume et comme condiment.Le bulbe de l''oignon se compose de bases épaissies de feuilles s''enveloppant les unes dans les autres. De façon générale on parle d''oignon pour tous les bulbes de Liliacées, comme les tulipes.',
   'https://images.unsplash.com/photo-1536235551740-15dc337df024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#6beba9',
   '{"original_name":"Oignon, cru","short_name":"Oignon","LCI_name":"Onion, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.41548167,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.1089838,"transform":0,"packaging":0,"transport":0.17697494,"distribution":0.029958116,"consumption":0.099564814}}' ::json),
(
   'Panais',
   'Le Panais (Pastinaca sativa L.) est une espèce de plante herbacée bisannuelle à racine charnue originaire d''Europe1, appartenant à la famille des Apiacées. Il fut autrefois très cultivé comme légume et comme plante fourragère. Le panais, détrôné par la pomme de terre, est de retour sur la table française depuis la fin du xxe siècle à la suite de sa réintroduction sur les étals par les maraîchers biologiques et l''engouement pour les légumes anciens. Le panais, d''une couleur blanc ivoire, a une forme proche de celle de la carotte, et un goût légèrement sucré, noiseté, avec un arôme épicé.',
   'https://cdn.pixabay.com/photo/2018/12/07/02/06/parsnips-3860993_960_720.jpg',
   '#d63b66',
   '{"original_name":"Panais, cru","short_name":"Panais","LCI_name":"Parsnip, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.38690672,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.087677241,"transform":0,"packaging":0,"transport":0.1704366,"distribution":0.029228063,"consumption":0.099564814}}' ::json),
(
   'Petit pois',
   'Les petits pois, pois de jardins, ou pois potagers sont les jeunes graines vertes de variétés cultivées du pois, récoltées après leur développement dans les gousses et avant leur maturité. Lorsque ces graines sont récoltées à leur maturité, elles sont appelées pois cassés. Les petits pois sont consommés comme légumes frais. Ils sont plus énergétiques (81 cal/100 g) que la majorité des légumes verts. Ils sont aussi intéressants pour leur apport en sucres solubles, en lysine et en fibres, composées en majorité d''hémicelluloses lorsqu''ils sont jeunes. Les petits pois sont aussi une bonne source de vitamine C (acide ascorbique) avec 25 mg/100 g.',
   'https://images.unsplash.com/photo-1596564823703-d28706a620e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#3a9143',
   'null' ::json),
(
   'Poireau',
   'Le poireau cultivé (Allium ampeloprasum var. porrum, anciennement Allium porrum) est une espèce de plante herbacée vivace largement cultivée comme plante potagère pour ses feuilles (pseudo-tiges) consommées comme légumes. Issu de la domestication du poireau perpétuel (Allium ampeloprasum) et sélectionné pour son feuillage, il appartient à la famille des Amaryllidacées. Noms communs : poireau, porreau, poirée, poirette, asperge du pauvre.',
   'https://images.unsplash.com/photo-1599776764145-bcc16b4e3815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#d58dd9',
   '{"original_name":"Poireau, cru","short_name":"Poireau","LCI_name":"Leek, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.71433485,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.41437532,"transform":0,"packaging":0,"transport":0.1704366,"distribution":0.029958116,"consumption":0.099564814}}' ::json),
(
   'Potiron',
   'Le potiron (Cucurbita maxima) est une plante de la famille des Cucurbitacées originaire des régions tropicales d''Amérique du Sud. Le potiron est largement cultivé comme plante potagère pour son fruit comestible à maturité. Le terme désigne aussi ce fruit consommé comme légume. C''est l''une des cinq espèces de courges les plus couramment cultivées.',
   'https://images.unsplash.com/photo-1522223829476-5d8ce6672c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#c3ec82',
   '{"original_name":"Potiron, cru","short_name":"Potiron","LCI_name":"Pumpkin, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.5490214,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.20516352,"transform":0,"packaging":0,"transport":0.19594288,"distribution":0.048350192,"consumption":0.099564814}}' ::json),
(
   'Radis',
   'Le radis cultivé, Raphanus sativus (du latin radix, radicis, « racine, raifort », du grec ῥαπυς, ῥαπυος, « rave, navet ») est une plante potagère annuelle ou bisannuelle de la famille des Brassicacées, principalement cultivée pour son hypocotyle charnu, souvent consommé cru, comme légume. Toutes les parties de la plante sont comestibles, bien que sa racine pivot soit plus populaire. La peau et la chair du radis peuvent être de différentes couleurs, dont la plus courante est le rouge. Certaines variétés peuvent être bicolores, roses, violettes, vertes, blanches ou noires.',
   'https://images.unsplash.com/photo-1592346520936-9444037b2e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#d84743',
   '{"original_name":"Radis rouge, cru","short_name":"Radis rouge","LCI_name":"Radish, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.24930031,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.072311127,"transform":0,"packaging":0,"transport":0.14056627,"distribution":0.024105619,"consumption":0.012317297}}' ::json),
(
   'Tomate',
   'La tomate (Solanum lycopersicum L.) est une espèce de plantes herbacées du genre Solanum de la famille des Solanacées, originaire du Nord-Ouest de l''Amérique du Sud, largement cultivée pour son fruit. Le terme désigne aussi ce fruit charnu. La tomate se consomme comme un légume-fruit, crue ou cuite. Elle est devenue un élément incontournable de la gastronomie dans de nombreux pays, et tout particulièrement dans le bassin méditerranéen. L''espèce compte quelques variétés botaniques, dont la tomate-cerise et plusieurs milliers de variétés cultivées.',
   'https://images.unsplash.com/photo-1596199050105-6d5d32222916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#78e4d4',
   '{"original_name":"Tomate de saison, crue","short_name":"Tomate de saison","LCI_name":"Tomato in season, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.62369712,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.29259285,"transform":0,"packaging":0,"transport":0.19160333,"distribution":0.03993612,"consumption":0.099564814}}' ::json),
(
   'Artichaut',
   'L’artichaut (Cynara cardunculus var. scolymus (L.) Benth.) est une plante dicotylédone de la famille des Astéracées (ou Composées) appartenant au genre Cynara. L''artichaut lui-même est un chardon domestiqué et cultivé, de l''espèce Cynara cardunculus, dont la variété sauvage est sans doute Cynara cardunculus var. sylvestris (Lamk.) Fiori, ayant donné naissance à deux formes : C. cardunculus f. cardunculus, le cardon, et C. cardunculus f. scolymus, l''artichaut. Ces deux formes ont longtemps été considérées comme des espèces différentes. On désigne sous le nom d''artichaut à la fois la plante entière et sa partie comestible, l''inflorescence en capitule, appelée aussi tête d''artichaut.',
   'https://images.unsplash.com/photo-1621762556022-ddb311f5392f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#d4662f',
   '{"original_name":"Artichaut, cru","short_name":"Artichaut","LCI_name":"Artichoke, globe, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":3.969737,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":1.5015528,"transform":0,"packaging":0,"transport":0.68174641,"distribution":0.19340077,"consumption":1.593037}}' ::json),
(
   'Cornichon',
   'Le cornichon est une plante herbacée annuelle de la famille des Cucurbitaceae, cultivée pour ses fruits, récoltés avant maturité et consommés principalement comme condiment. Le nom scientifique est Cucumis sativus, le même que celui du concombre (ils sont tous deux de la même espèce). Historiquement, le concombre était récolté à maturité, à la différence du cornichon, puis des variétés ont été sélectionnées pour produire des cornichons et d''autres des concombres. Les sélections effectuées par l''homme ont accentué les caractères propres à chacun, pour obtenir des cultivars distincts.',
   'https://images.unsplash.com/photo-1591340270341-00a786ffc0aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#5dcae8',
   'null' ::json),
(
   'Potimarron',
   'Les potimarrons sont un groupe de cultivars eurasiatiques du potiron, une plante d''origine mésoaméricaine arrivée dans l''Ancien Monde lors de l''échange colombien. Ils auraient été introduits au Japon par des navigateurs portugais, et n''auraient gagné l''Europe depuis le Japon que tardivement. Ces premiers potimarrons, appelés alors « potiron doux de Hokkaido » se sont rapidement diffusés dans les jardins d''Europe. C''est à partir de ce dernier que se développe la variété appelée « Potimarron français ». Les potimarrons peuvent être consommés en potage, au four avec de l''ail, frits, en tourte ou en purée. À la différence du potiron classique, il n''est pas nécessaire de retirer la peau du potimarron avant la cuisson. Il peut aussi être consommé cru. Les graines peuvent être conservées et grillées pour l''apéritif.',
   'https://images.unsplash.com/photo-1570142056130-9f6b59c6287a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#e28e2f',
   '{"original_name":"Potimarron, pulpe, cru","short_name":"Potimarron","LCI_name":"Red kuri squash, pulp, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.52351513,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.20516352,"transform":0,"packaging":0,"transport":0.1704366,"distribution":0.048350192,"consumption":0.099564814}}' ::json),
(
   'Poivron',
   'Le poivron est un terme souvent utilisé pour caractériser des variétés de piments doux de l''espèce Capsicum annuum à très gros fruits (parfois appelé piment au Québec). C''est une plante annuelle de la famille des Solanacées originaire du Mexique, d''Amérique centrale et d''Amérique du Sud. La plante est cultivée comme plante potagère pour ses fruits consommés, crus ou cuits, comme légumes. Le terme désigne à la fois le fruit et la plante. Les graines de poivrons ont été importées en Espagne pour la première fois en 1493, et se sont propagées vers l''Europe et l''Asie. L''appellation poivron est dérivée du mot poivre, et fait son apparition à l''écrit en 1785.',
   'https://images.unsplash.com/photo-1527276709728-d5a946ba727b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#8e9fde',
   '{"original_name":"Poivron, vert, jaune ou rouge, cru","short_name":"Poivron","LCI_name":"Sweet pepper, green, yellow or red, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.92252051,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.53935177,"transform":0,"packaging":0,"transport":0.22610913,"distribution":0.057494804,"consumption":0.099564814}}' ::json),
(
   'Piment',
   'Le terme piment (vert, jaune, orange, rouge, brun, pêche ou violet) est un nom vernaculaire désignant le fruit de cinq espèces de plantes du genre Capsicum de la famille des Solanacées et de plusieurs autres taxons. Le mot désigne plus communément le fruit de ces plantes, utilisés comme condiment ou légume. La notion de piment est généralement associée à la saveur de piquant. Les piments sont aujourd''hui cultivés dans au moins 64 pays, l''Inde produisant à elle seule 38,7 % de la production mondiale (3,4 millions de tonnes). Ils sont de plus en plus utilisés pour leurs aspects décoratifs et pour leurs propriétés médicinales.',
   'https://images.unsplash.com/photo-1505725513549-477dfcbe55c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#cccf58',
   '{"original_name":"Piment, cru","short_name":"Piment","LCI_name":"Chili pepper, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":3.8090038,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":3.425835,"transform":0,"packaging":0,"transport":0.22610913,"distribution":0.057494804,"consumption":0.099564814}}' ::json),
(
   'Chou cabus',
   'Le chou cabus ou chou pommé (Brassica oleracea var. capitata ou Brassica oleracea Groupe Capitata) est une variété de chou caractérisée par une tête et un feuillage lisse. C''est une plante biannuelle formant une rosette de feuilles, de 30 à 60 cm de haut et de large. Certains choux blanc, comme la variété Coeur de boeuf atteignent parfois de très grande taille. ',
   'https://images.unsplash.com/photo-1508302730834-a3786a6c951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#48719f',
   'null' ::json),
(
   'Chicorée',
   'Les Chicorées (Cichorium) sont un genre botanique qui rassemble des plantes de la famille des Astéracées (composées). Ce genre comporte à la fois des espèces sauvages et des plantes qui sont cultivées, soit des variétés à feuilles (salades, endives), soit des variétés à racines (succédané de café appelé chicorée).',
   'https://cdn.pixabay.com/photo/2015/10/08/00/12/plants-977005_960_720.jpg',
   '#c99e3b',
   '{"original_name":"Salade ou chicorée frisée, crue","short_name":"Salade ou chicorée frisée","LCI_name":"Curly endive, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":0.88251448,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.31309977,"transform":0,"packaging":0,"transport":0.2272488,"distribution":0.076659738,"consumption":0.26550617}}' ::json),
(
   'Chou chinois',
   '« Chou chinois » peut désigner deux sous-espèces différentes : Brassica rapa subsp. pekinensis, aussi appelé chou chinois, chou de Pékin, ou pe-tsaï; Brassica rapa subsp. chinensis, aussi appelé chou chinois, chou de Chine, ou bok choy. Il est très consommé en Asie et il existe plus de 30 variétés différentes! Sa meilleure saison est l''automne, car il a besoin de températures fraîches. ',
   'https://cdn.pixabay.com/photo/2020/12/02/16/35/chinese-cabbage-5798137_960_720.jpg',
   '#539cc1',
   '{"original_name":"Chou chinois ou pak-choi ou pé-tsai, cru","short_name":"Chou chinois ou pak-choi ou pé-tsai","LCI_name":"Chinese cabbage (nappa cabbage or bok choy), raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"légumes","co2_total":1.0577395,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.50051761,"transform":0,"packaging":0,"transport":0.2272488,"distribution":0.064466923,"consumption":0.26550617}}' ::json),
(
   'Fraise',
   'La fraise est un fruit rouge issu des fraisiers, espèces de plantes herbacées appartenant au genre Fragaria (famille des Rosacées), dont plusieurs variétés sont cultivées. Les fraises se développent à partir du réceptacle charnu des fleurs. Ce sont donc des faux fruits. De forme ovoïde oblongues plus ou moins arrondies, elles sont de couleur rouge ou jaune blanchâtre selon les variétés. Au sens botanique du terme, les « vrais » fruits des fraisiers sont en fait les akènes, ces petits grains secs disposés dans des alvéoles sur les fraises. Ils sont de couleur verte à brune, et renferment chacun soit un ovule (non fécondé), soit une graine (ovule fécondé) qui contient elle-même un germe.',
   'https://images.unsplash.com/photo-1566804770468-867f6158bda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#91942f',
   '{"original_name":"Fraise de saison, crue","short_name":"Fraise de saison","LCI_name":"Strawberry in season, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"fruits","co2_total":0.52538699,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.31724926,"transform":0,"packaging":0,"transport":0.16288342,"distribution":0.032937006,"consumption":0.012317297}}' ::json),
(
   'Concombre amer',
   'Le concombre amer qu''on  appelle aussi la margose, melon amer ou momordique (Momordica charantia), est une plante potagère grimpante de la famille des Cucurbitaceae, cultivée dans les climats chauds ou tempérés en plante annuelle. Le terme margose désigne la plante et le fruit. Le fruit, la feuille et les graines sont comestibles et amers. Cette amertume provient des momordicines, substances proches de la quinine. La margose est connue pour ses qualités culinaires et pour ses propriétés thérapeutiques en médecine traditionnelle, notamment dans le traitement du diabète et de certains cancers.',
   'https://cdn.pixabay.com/photo/2016/08/23/17/11/bitter-gourd-1615019_960_720.jpg',
   '#d2b1d9',
   'null' ::json),
(
   'Gombo',
   'Le gombo (Abelmoschus esculentus), appelé lalo à l''île de La Réunion et à l''île Maurice, calou en Guyane, calalou en Haïti ou okra en Louisiane et plus généralement dans le sud des États-Unis, est une espèce de plante tropicale à fleurs originaire d''Afrique ou d''Inde, proche de l''hibiscus, appartenant à la famille des Malvaceae. Son fruit est une capsule de forme pyramidale récoltée verte et employée comme légume et comme condiment. Sa section transversale montre cinq carpelles qui forment un pentagone régulier. Sa peau est couverte de soies duveteuses.',
   'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#5f8137',
   'null' ::json),
(
   'Framboise',
   'La framboise est un fruit rouge issu du framboisier (Rubus idaeus), un arbrisseau de la famille des rosacées. Selon qu''il s''agit de framboisiers sauvages ou cultivés, la framboise pèse de 4 à 10 g, mesure jusqu''à 2,5 cm et compte de 40 à 80 drupéoles. Ce fruit rouge-rose est issu de la transformation de la quarantaine de minuscules carpelles d''une seule et même fleur, qui se transforment en drupéoles semi-soudées. De forme ovoïde ou conique, elle a une saveur sucrée accompagnée, selon les variétés, d''une pointe d''acidité. Fruit fragile et délicat, il est généralement présenté en barquettes pour le protéger des chocs et des manipulations.',
   'https://images.unsplash.com/photo-1593461802389-d57d73a36913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400',
   '#e78793',
   '{"original_name":"Framboise, crue","short_name":"Framboise","LCI_name":"Raspberry, raw","category":"fruits, légumes, légumineuses et oléagineux","subcategory":"fruits","co2_total":0.90641828,"co2_units":"kg CO2 eq/kg de produit","co2_share":{"agriculture":0.50243788,"transform":0,"packaging":0,"transport":0.35872609,"distribution":0.032937006,"consumption":0.012317297}}' ::json);

INSERT INTO "event" (
   event_type_id,
   species_id,
   from_date,
   until_date,
   option_name)
VALUES (
   1,
   1,
   '2000-02-01',
   '2000-05-01',
   'default'),
(
   2,
   1,
   '2000-04-01',
   '2000-06-01',
   'default'),
(
   3,
   1,
   '2000-04-01',
   '2000-07-01',
   'default'),
(
   4,
   1,
   '2000-07-01',
   '2000-11-01',
   'default'),
(
   2,
   2,
   '2000-03-01',
   '2000-08-01',
   'default'),
(
   4,
   2,
   '2000-07-01',
   '2000-11-01',
   'default'),
(
   1,
   3,
   '2000-02-01',
   '2000-04-01',
   'default'),
(
   2,
   3,
   '2000-03-01',
   '2000-08-01',
   'default'),
(
   4,
   3,
   '2000-06-01',
   '2000-12-01',
   'default'),
(
   1,
   4,
   '2000-02-01',
   '2000-04-01',
   'default'),
(
   2,
   4,
   '2000-04-01',
   '2000-06-01',
   'default'),
(
   3,
   4,
   '2000-04-01',
   '2000-06-01',
   'default'),
(
   4,
   4,
   '2000-09-01',
   '2000-12-01',
   'default'),
(
   1,
   5,
   '2000-01-01',
   '2000-03-01',
   'default'),
(
   2,
   5,
   '2000-03-01',
   '2000-07-01',
   'default'),
(
   3,
   5,
   '2000-03-01',
   '2000-05-01',
   'default'),
(
   3,
   5,
   '2000-06-01',
   '2000-09-01',
   'default'),
(
   4,
   5,
   '2000-06-01',
   '2000-01-01',
   'default'),
(
   1,
   6,
   '2000-03-01',
   '2000-05-01',
   'default'),
(
   2,
   6,
   '2000-04-01',
   '2000-07-01',
   'default'),
(
   3,
   6,
   '2000-03-15',
   '2000-05-16',
   'default'),
(
   4,
   6,
   '2000-06-01',
   '2000-11-01',
   'default'),
(
   1,
   7,
   '2000-04-01',
   '2000-05-01',
   'default'),
(
   2,
   7,
   '2000-05-01',
   '2000-07-01',
   'default'),
(
   3,
   7,
   '2000-05-01',
   '2000-07-01',
   'default'),
(
   4,
   7,
   '2000-06-01',
   '2000-12-01',
   'default'),
(
   2,
   8,
   '2000-02-01',
   '2000-05-01',
   'default'),
(
   2,
   8,
   '2000-09-01',
   '2000-12-01',
   'default'),
(
   4,
   8,
   '2000-10-01',
   '2000-04-01',
   'default'),
(
   2,
   9,
   '2000-10-01',
   '2000-05-01',
   'default'),
(
   4,
   9,
   '2000-08-01',
   '2000-11-01',
   'default'),
(
   4,
   9,
   '2000-03-01',
   '2000-07-01',
   'default'),
(
   2,
   10,
   '2000-04-01',
   '2000-09-01',
   'default'),
(
   4,
   10,
   '2000-06-01',
   '2000-11-01',
   'default'),
(
   1,
   11,
   '2000-02-01',
   '2000-05-01',
   'printemps'),
(
   3,
   11,
   '2000-04-01',
   '2000-05-16',
   'printemps'),
(
   4,
   11,
   '2000-05-01',
   '2000-07-01',
   'printemps'),
(
   2,
   11,
   '2000-04-01',
   '2000-07-01',
   'été'),
(
   3,
   11,
   '2000-06-01',
   '2000-08-01',
   'été'),
(
   4,
   11,
   '2000-07-01',
   '2000-09-01',
   'été'),
(
   2,
   11,
   '2000-07-01',
   '2000-09-01',
   'automne'),
(
   3,
   11,
   '2000-08-01',
   '2000-09-01',
   'automne'),
(
   4,
   11,
   '2000-09-01',
   '2000-11-01',
   'automne'),
(
   2,
   11,
   '2000-08-01',
   '2000-11-01',
   'hiver'),
(
   3,
   11,
   '2000-10-01',
   '2000-11-01',
   'hiver'),
(
   4,
   11,
   '2000-03-01',
   '2000-06-01',
   'hiver'),
(
   2,
   12,
   '2000-08-01',
   '2000-11-01',
   'default'),
(
   4,
   12,
   '2000-09-01',
   '2000-04-01',
   'default'),
(
   1,
   13,
   '2000-02-01',
   '2000-05-01',
   'default'),
(
   2,
   13,
   '2000-05-01',
   '2000-06-01',
   'default'),
(
   3,
   13,
   '2000-04-15',
   '2000-06-01',
   'default'),
(
   4,
   13,
   '2000-06-01',
   '2000-10-01',
   'default'),
(
   2,
   14,
   '2000-07-01',
   '2000-10-01',
   'default'),
(
   4,
   14,
   '2000-09-01',
   '2000-12-01',
   'default'),
(
   2,
   15,
   '2000-02-01',
   '2000-05-01',
   'default'),
(
   2,
   15,
   '2000-08-01',
   '2000-10-01',
   'default'),
(
   3,
   15,
   '2000-10-01',
   '2000-12-01',
   'default'),
(
   3,
   15,
   '2000-01-01',
   '2000-03-01',
   'default'),
(
   4,
   15,
   '2000-04-01',
   '2000-09-01',
   'default'),
(
   2,
   16,
   '2000-02-15',
   '2000-07-01',
   'default'),
(
   4,
   16,
   '2000-05-01',
   '2000-10-01',
   'default'),
(
   2,
   17,
   '2000-02-15',
   '2000-06-16',
   'default'),
(
   2,
   17,
   '2000-10-01',
   '2000-12-01',
   'default'),
(
   4,
   17,
   '2000-04-01',
   '2000-06-01',
   'default'),
(
   4,
   17,
   '2000-05-01',
   '2000-10-01',
   'default'),
(
   1,
   18,
   '2000-01-15',
   '2000-04-01',
   'été'),
(
   3,
   18,
   '2000-05-01',
   '2000-06-01',
   'été'),
(
   4,
   18,
   '2000-06-15',
   '2000-10-01',
   'été'),
(
   1,
   18,
   '2000-03-01',
   '2000-06-01',
   'automne ou hiver'),
(
   3,
   18,
   '2000-05-01',
   '2000-08-01',
   'automne ou hiver'),
(
   4,
   18,
   '2000-10-01',
   '2000-05-01',
   'automne ou hiver'),
(
   2,
   19,
   '2000-04-01',
   '2000-06-01',
   'default'),
(
   4,
   19,
   '2000-09-01',
   '2000-12-01',
   'default'),
(
   1,
   20,
   '2000-02-15',
   '2000-03-16',
   'default'),
(
   2,
   20,
   '2000-03-15',
   '2000-10-01',
   'default'),
(
   4,
   20,
   '2000-03-15',
   '2000-12-01',
   'default'),
(
   1,
   21,
   '2000-01-01',
   '2000-05-16',
   'default'),
(
   3,
   21,
   '2000-05-01',
   '2000-06-01',
   'default'),
(
   4,
   21,
   '2000-07-01',
   '2000-11-01',
   'default'),
(
   1,
   22,
   '2000-02-01',
   '2000-04-01',
   'default'),
(
   3,
   22,
   '2000-03-01',
   '2000-05-01',
   'default'),
(
   3,
   22,
   '2000-09-01',
   '2000-11-01',
   'default'),
(
   4,
   22,
   '2000-05-01',
   '2000-09-01',
   'default'),
(
   1,
   23,
   '2000-03-01',
   '2000-05-01',
   'default'),
(
   2,
   23,
   '2000-04-01',
   '2000-07-01',
   'default'),
(
   3,
   23,
   '2000-03-15',
   '2000-05-16',
   'default'),
(
   4,
   23,
   '2000-06-01',
   '2000-11-01',
   'default'),
(
   1,
   24,
   '2000-02-01',
   '2000-06-01',
   'default'),
(
   2,
   24,
   '2000-03-01',
   '2000-07-01',
   'default'),
(
   3,
   24,
   '2000-03-01',
   '2000-07-01',
   'default'),
(
   4,
   24,
   '2000-07-01',
   '2000-12-01',
   'default'),
(
   1,
   25,
   '2000-02-01',
   '2000-05-01',
   'default'),
(
   3,
   25,
   '2000-04-01',
   '2000-07-01',
   'default'),
(
   4,
   25,
   '2000-07-01',
   '2000-10-01',
   'default'),
(
   1,
   26,
   '2000-02-01',
   '2000-05-01',
   'default'),
(
   3,
   26,
   '2000-04-01',
   '2000-07-01',
   'default'),
(
   4,
   26,
   '2000-07-01',
   '2000-10-01',
   'default'),
(
   1,
   27,
   '2000-02-01',
   '2000-10-01',
   'default'),
(
   2,
   27,
   '2000-05-01',
   '2000-08-01',
   'default'),
(
   4,
   27,
   '2000-01-01',
   '2000-07-01',
   'default'),
(
   4,
   27,
   '2000-10-01',
   '2000-01-01',
   'default'),
(
   1,
   28,
   '2000-02-01',
   '2000-05-16',
   'default'),
(
   2,
   28,
   '2000-05-15',
   '2000-07-16',
   'default'),
(
   3,
   28,
   '2000-05-01',
   '2000-09-01',
   'default'),
(
   4,
   28,
   '2000-05-01',
   '2000-12-01',
   'default'),
(
   1,
   29,
   '2000-04-01',
   '2000-06-01',
   'default'),
(
   2,
   29,
   '2000-06-01',
   '2000-09-01',
   'default'),
(
   3,
   29,
   '2000-05-15',
   '2000-09-01',
   'default'),
(
   4,
   29,
   '2000-06-15',
   '2000-01-01',
   'default'),
(
   1,
   30,
   '2000-11-01',
   '2000-04-01',
   'default'),
(
   2,
   30,
   '2000-11-01',
   '2000-04-01',
   'default'),
(
   3,
   30,
   '2000-11-01',
   '2000-04-01',
   'default'),
(
   3,
   30,
   '2000-11-01',
   '2000-04-01',
   'default'),
(
   4,
   30,
   '2000-11-01',
   '2000-04-01',
   'default'),
(
   1,
   31,
   '2000-02-01',
   '2000-04-01',
   'default'),
(
   2,
   31,
   '2000-05-15',
   '2000-07-01',
   'default'),
(
   3,
   31,
   '2000-06-01',
   '2000-07-01',
   'default'),
(
   4,
   31,
   '2000-07-01',
   '2000-09-01',
   'default'),
(
   1,
   32,
   '2000-12-01',
   '2000-05-01',
   'default'),
(
   3,
   32,
   '2000-05-15',
   '2000-08-16',
   'default'),
(
   4,
   32,
   '2000-07-01',
   '2000-11-01',
   'default'),
(
   2,
   33,
   '2000-11-01',
   '2000-04-01',
   'default'),
(
   4,
   33,
   '2000-06-15',
   '2000-07-16',
   'default');

INSERT INTO "garden" (
   name,
   user_id)
VALUES (
   'Premier jardin de Florian',
   1),
(
   'Deuxième jardin de Florian',
   1),
(
   'Troisième jardin de Florian',
   1),
(
   'Le fabuleux jardin de Bob',
   3),
(
   'Premier jardin de Nicolas',
   2);

INSERT INTO "garden_species" (
   garden_id,
   species_id)
VALUES (
   1,
   1),
(
   1,
   6),
(
   1,
   11),
(
   1,
   16),
(
   2,
   3),
(
   2,
   4),
(
   3,
   18),
(
   5,
   5),
(
   5,
   10),
(
   5,
   15);

INSERT INTO "exposition_species" (
   exposition_id,
   species_id)
VALUES ((
      SELECT
         id
      FROM
         "exposition"
      WHERE
         name = 'plein soleil'), 1), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 2), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 2), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 3), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 4), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 5), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 5), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 6), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 7), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 8), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 9), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 10), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 10), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 11), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 11), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 12), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ombre'), 12), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 13), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 14), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 14), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 15), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 16), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 17), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 17), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 18), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 18), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 19), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 20), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'plein soleil'), 21), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 22), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 23), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 24), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'plein soleil'), 25), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'plein soleil'), 26), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 27), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 27), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 28), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 29), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 29), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 30), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 30), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 31), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'plein soleil'), 31), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ensoleillée'), 32), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'mi-ombre'), 33), ((
   SELECT
      id FROM "exposition"
   WHERE
      name = 'ombre'), 33);

INSERT INTO "soil_type_species" (
   soil_type_id,
   species_id)
VALUES ((
      SELECT
         id
      FROM
         "soil_type"
      WHERE
         name = 'humifère'), 1), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 1), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 1), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 1), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'tout type'), 2), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 2), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 2), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 2), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 3), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 3), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 3), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'tout type'), 3), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 4), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 4), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 4), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 4), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 5), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'calcaire'), 5), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 5), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 5), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 5), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humide'), 5), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'sableux'), 6), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 6), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 6), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 6), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 7), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 7), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'lourd'), 7), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 7), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 8), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 8), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 8), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 8), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humide'), 8), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 9), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'calcaire'), 9), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 9), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'tout type'), 10), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 10), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 10), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 10), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 11), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humide'), 11), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 11), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 11), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 12), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 12), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 12), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 12), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'calcaire'), 13), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 13), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 13), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 13), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 13), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 13), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humide'), 14), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 14), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 14), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 14), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 15), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 15), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 15), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 15), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'calcaire'), 16), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 16), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 16), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 16), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 16), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 16), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 17), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 17), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 17), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 17), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'tout type'), 18), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 18), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 18), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 18), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 19), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 19), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'lourd'), 19), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 20), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'sableux'), 20), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 20), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 20), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 20), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 20), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'tout type'), 21), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 21), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 21), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 21), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 22), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 22), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 22), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 22), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 22), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 22), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 22), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 23), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 23), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humide'), 23), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 24), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 24), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'lourd'), 24), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 24), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 25), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'caillouteux'), 25), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 25), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 25), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 25), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 25), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 26), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 26), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'caillouteux'), 26), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 26), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 26), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 26), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 27), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'calcaire'), 27), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 27), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humide'), 27), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 27), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 27), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'tout type'), 28), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 28), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 28), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 28), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'calcaire'), 29), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 29), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'argileux'), 29), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'meuble'), 29), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 29), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 29), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 30), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'humifère'), 30), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 30), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 30), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 31), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 31), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 31), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 31), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'tout type'), 32), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'réchauffé'), 32), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 32), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'drainé'), 32), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'léger'), 33), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'frais'), 33), ((
   SELECT
      id FROM "soil_type"
   WHERE
      name = 'riche'), 33);

INSERT INTO "species_water_need" (
   water_need_id,
   species_id)
VALUES ((
      SELECT
         id
      FROM
         "water_need"
      WHERE
         name = 'fort'), 1), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 2), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 3), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 4), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 5), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 6), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 7), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 8), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 9), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 10), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 11), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 12), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 13), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 14), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'faible'), 15), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 16), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 17), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 18), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 19), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 20), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 21), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 22), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 23), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 24), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 25), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 26), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 27), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 28), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 29), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 30), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 31), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'fort'), 32), ((
   SELECT
      id FROM "water_need"
   WHERE
      name = 'moyen'), 33);

INSERT INTO "culture_type_species" (
   culture_type_id,
   species_id)
VALUES ((
      SELECT
         id
      FROM
         "culture_type"
      WHERE
         name = 'en pleine terre'), 1), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 1), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 1), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 2), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 3), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 4), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 5), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 5), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 6), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 6), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 7), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 7), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 8), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 9), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 10), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 11), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 11), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 12), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 12), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 13), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 13), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 14), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 15), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 16), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 17), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 18), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 19), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 20), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 20), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 21), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 21), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 22), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 23), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 23), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 24), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 25), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 25), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 25), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 26), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 26), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 26), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 27), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 28), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 29), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 30), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 30), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 30), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 31), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en serre'), 31), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 32), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pleine terre'), 33), ((
   SELECT
      id FROM "culture_type"
   WHERE
      name = 'en pot'), 33);

COMMIT;
