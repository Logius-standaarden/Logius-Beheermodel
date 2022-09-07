# Operationeel

Operationeel beheer omvat volgens BOMOS het tekstuele beheer van de
documentatie, het verzamelen van eisen en wensen en de vertaling daarvan
naar wijzigingsvoorstellen. Verder omvat het operationele proces de
besluitvorming en het versie- of release-beheer

Het operationele wijzigingsproces is ingericht op Github. De omgeving
die we ook gebruiken voor het beheer en de publicatie van de documentatie.
In dit hoofdstuk wordt het operationele wijzigingsproces op hoofdlijnen
beschreven. Voor details van de implementatie verwijzen we naar de
[bijlage over gebruik Github in het beheerproces](#bijlage-gebruik-github-in-het-beheerproces)

## Initiatie
Toevoegingen aan de standaard zoals het toevoegen van een nieuwe
koppelvlakspecificatie worden behandeld als in introductie van een nieuwe
standaard.

1.  Uitbreidingen en aanpassingen in de standaarden in beheer bij Logius
    komen tot stand door participatie van de verschillende belanghebbenden.

2.  Belanghebbenden kunnen op verschillende manieren participeren.
    1. op persoonlijke titel (het proces is volledig open)
    2. als lid van de Digikoppeling Community
    3. als lid van één van de overleggen: het Technisch Overleg,
       de Programmeringstafel Gegevensuitwisseling of het OBDO.

## Wensen en Eisen
Wensen en eisen zijn aanpassingen op de bestaande standaarden en
koppelvlakspecificaties.

Wijzigingsvoorstellen kunnen binnen komen via verschillende kanalen:
1.  Rechtstreeks bij de beheerorganisatie, tijdens overleggen, via de website
   of mail
2.  Bij de werkgroepoverleggen van de standaard en tijdens overleggen, via de
   website of mail

## Uitvoering en ontwikkeling (Wijzigingsproces)

Afhankelijk van de impact van een wijziging kan deze aangemerkt worden als
een _patch_. Een patch is een kleine (tekstuele) wijziging die geen impact
heeft op implementaties.

Een _wijziging_ is een aanpassing met impact op de werking of het proces van
de Digikoppeling standaard. Waarbij nog een onderscheid gemaakt wordt tussen
wijzigingen met kleine en met grote impact.

Patches en wijzigingen worden verzameld in een _release_. Een release is een
nieuwe versie van de Digikoppeling standaard. Nieuwe releases worden regelmatig
doorgevoerd en moeten worden goedgekeurd door het Technisch Overleg en,
afhankelijk van de impact van een nieuwe release door een programmeringstafel.
Een nieuwe release wordt bekrachtigd door het besluitvormend overleg.
Afhankelijk van de impact van een wijziging kan deze aangemerkt worden als
een _patch_. Een patch is een kleine (tekstuele) wijziging die geen impact
heeft op implementaties.

Een _wijziging_ is een aanpassing met impact op de werking of het proces van
de Digikoppeling standaard. Waarbij nog een onderscheid gemaakt wordt tussen
wijzigingen met kleine en met grote impact.

Patches en wijzigingen worden verzameld in een _release_. Een release is een
nieuwe versie van de Digikoppeling standaard. Nieuwe releases worden regelmatig
doorgevoerd en moeten worden goedgekeurd door het Technisch Overleg en,
afhankelijk van de impact van een nieuwe release door een programmeringstafel.
Een nieuwe release wordt bekrachtigd door het besluitvormend overleg.

### Wijzigingen
![Behandeling van een wijzigingsvoorstel in het beheerproces](images/Beheerproces.png "Behandeling van een wijzigingsvoorstel in het beheerproces")

1. Acceptatie van een wijzigingsvoorstel.
2. Labelen van een voorstel als groot/klein, aangeven van status.
3. Behandeling van een wijzigingsvoorstel.
4. Agendering voor een overleg.
5. Advisering vanuit overleggen.
6. Acceptatie van een wijzigingsvoorstel.
7. Doorvoeren van een wijzigingsvoorstel.
8. Publicatie van een wijziging in de komende release

Wanneer een wijziging is geaccepteerd kan deze deel uitmaken van een
volgende release.

### Patches
Een patch is een zeer kleine wijziging die geen impact heeft op de implementatie. Bijvoorbeeld tekstuele wijzigingen in de documentatie. De beheerorganisatie beoordeelt de impact van een wijziging en bepaalt daarmee of het een patch betreft (of een wijziging).

1. Beoordeling van een voorgestelde patch door de beheerorganisatie
2. Doorvoeren van de patch door de beheerorganisatie
3. Publicatie van een patch in de komende release

### Releases
De onderdelen van de Digikoppeling standaard en Digikoppeling voorzieningen zullen gezamenlijk en afzonderlijk onderhevig zijn aan beheer en onderhoud wat leidt tot nieuwe releases. Het vaststellen van nieuwe releases vindt plaats binnen het releaseplanningsproces. Het tactisch overleg is verantwoordelijk voor de juiste uitvoering. Hier komen alle belanghebbenden met verantwoordelijkheid voor de behoefte, effecten en impact op de bedrijfsvoering, informatievoorziening en ICT samen.

Het vaststellen van een nieuwe release van afzonderlijke Digikoppeling onderdelen en een samenhangende Digikoppeling architectuur wordt gedaan volgens het beleid in paragraaf 2.4. Digikoppeling beheer zal binnen de releaseplanning niet alleen nieuwe releases voordragen aan het tactisch/strategisch overleg maar ook voorstellen hoe lang oude releases in bedrijf blijven en ondersteund zullen worden.

Voor nieuwe releases wordt uitgegaan van een aantal principes:
1. De Digikoppeling-standaard dient in principe zo stabiel te zijn dat
   nieuwe releases van de standaard bestaande implementaties van een
   oudere release niet tot migratie verplichten.
2. Nieuwe releases van de standaard dienen als nieuwe profielen binnen
   een Koppelvlakstandaard naast de bestaande profielen gerealiseerd
   te worden (uitbreiding). Indien dit niet mogelijk is wordt gestreefd
   naar het interoperabel (engels: backwards compatible) zijn van
   profielen met voorgaande releases (interoperabele verandering).
   Bij wijzigingen waarin ook dit niet mogelijk is, vindt een expliciete
   afweging plaats van de geboden verbetering ten opzichte van het belang
   van bestaande implementatie (beperking impact).
3. Wijzigingsaanvragen kunnen door belanghebbenden worden ingediend
   bij de beheerder.
4. Het Digikoppeling Technisch Overleg is verantwoordelijk voor de
   beoordeling van ingediende wijzigingsaanvragen, uitwerken ervan
   en de inhoudelijke (door)ontwikkeling van de te beheren
   Digikoppeling-onderdelen.
5. De Digikoppeling-beheerder zorgt voor de voorbereiding van de
   releaseplanning.
6. Het tactisch overleg beoordeelt de releasevoorstellen en stelt
   het beleid en de roadmap van nieuwe releases van de
   Digikoppeling-standaard vast in het releaseplanningsproces.
7. Bij het vaststellen van de inhoud van een nieuwe release van een
   Digikoppeling onderdeel wordt gestreefd naar consensus. Als consensus
   uitblijft zal de Digikoppeling beheerder, samen met het Ministerie
   van BZK de inhoud van een nieuwe release vaststellen.
8. Bij het vaststellen van een nieuwe release zal het strategisch overleg
   uitspraken doen over het ondersteunen van oude releases.
9. Maximaal kunnen twee (opéénvolgende) releases van een Digikoppeling
   onderdeel gelijktijdig de status „In Gebruik‟ hebben.
10. De releasetermijnen voor de verschillende Digikoppeling-onderdelen
   zijn afgestemd op de omgeving waarin deze worden gebruikt.
   Koppelvlak standaarden hebben bijvoorbeeld een kortere releasetermijn
   dan de bovenliggende architectuur.
11. In bijzondere gevallen kan van de releasetermijn worden afgeweken.
12. Op het moment dat het functionele toepassingsgebied van
    Digikoppeling, waarvoor het pas-toe-of-leg-uit-regime geldt
    wijzigt, wordt dit voorgelegd aan Forum Standaardisatie en het
    OBDO zodat het regime kan worden bekrachtigd voor dit nieuwe
    toepassingsgebied.

### Impact van wijzigingen en versienummering
Afhankelijk van de impact van een wijziging of patch krijgt een release
een nieuwsversienummer. Het versienummerbeheer volgt principes voor
semantische versienummering
[en is beschreven in een bijlage](#bijlage-versie-nummering-logius-standaarden)

De impact van een wijziging kan verschillen per koppelvlakspecificatie. Voor de
standaarden die deel uitmaken van Digikoppeling hebben we de volgende _impactmatrix_ opgesteld:

| Standaard                |  Toevoegen  |   Wijzigen  | Verwijderen |  Vervallen  |
|--------------------------|-------------|-------------|-------------|-------------|
|                          | major/minor | major/minor | major/minor | major/minor |

In de matrix zijn kolommmen opgenomen voor verwijderen _en_ vervallen.
Met verwijderen wordt het volledig verwijderen van een regel of concept bedoeld.
Bij vervallen blijft deze behouden maar wordt door een geldigheidsdatum aangegeven
dat de regel of eht concept niet meer van toepassing is.

## Status van de standaard

| **Afkorting** | **Status van de standaard** | **Beschrijving van de status** |
|      ---      |              ---            |               ---              |
| IO | In Ontwikkeling | Een nieuwe release van de standaard is "In Ontwikkeling" wanneer er met medeweten en medewerking van participanten aan gewerkt wordt en wanneer dit onderdeel of deze release nog niet voor de buitenwereld is gepubliceerd. |
| IG | In Gebruik      | Als een nieuwe release van de standaard gereed is, en is bestendigd door Forum Standaardisatie, stelt het Technisch Overleg de status 'In Gebruik' vast. Door deze vaststelling worden gebruikers en ICT-leveranciers opgeroepen deze nieuwe release op te nemen in software en in gebruik te nemen. |
| EO | Einde Ondersteuning | De standaardversie met de status "Einde ondersteuning" wordt niet meer ondersteund door de beheerder. De kennis en informatie voor vragen en support is bij de beheerder niet langer beschikbaar. |
| TG | Teruggetrokken   | De standaard krijgt de status "Teruggetrokken" indien een release van de standaard niet bruikbaar blijkt (bijv. vanwege implementatieproblemen). |

## Documentatie

<aside class="example">
Alle documenten m.b.t. de standaard en het beheer van de standaard
worden openbaar en zonder drempels voor gebruik, gepubliceerd op
logius.nl en onze Github pagina's. Logius publiceert tenminste de
volgende documenten:

De vergaderstukken van het Technisch overleg en overige
besluitvormende gremia.

De specificaties van de standaard

De voorlopige specificaties van de nieuwe versie van de standaard.

Versie xx van de xx is gepubliceerd op:
</aside>
