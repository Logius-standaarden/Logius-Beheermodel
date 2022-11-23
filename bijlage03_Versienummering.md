# Bijlage: versie-nummering Logius standaarden
Deze bijlage beschrijft de versioneringsmethodiek ofwel de standaard manier om om te gaan met versienummers van de standaard. De versioneringsmethodiek is gelijk voor alle 'gepubliceerde standaarden' die onder beheer zijn van Logius (afdeling standaarden) en is gebaseerd op SemVer. SemVer staat voor Semantisch Versioneren en we gebruiken versie 2.0.0  van de standaard zoals [gepubliceerd in de specificatie van Semantisch Versioneren (SemVer)](https://semver.org/lang/nl/#semantisch-versioneren-200).

Dat wil zeggen we kennen een bepaalde betekenis toe aan Major,Minor en Patch wijzigingen voor de standaarden zodanig dat de versienummers informatief zijn voor het type wijziging. 
> Aandachtpunt hierbij is dat semantische versionering voor standaarden anders werkt dan semantische versionering voor software. 

De versienummers voor standaarden drukken uit of een (implementatie) van een oude versie van de standaard voldoet aan de regels van de nieuwe standaard (en dus compliant is aan de nieuwe versie) of niet. 
Het voordeel van deze manier van versioneren is dat het versienummer signaleert of een implementatie van een bepaalde versie van de standaard voldoet aan een andere (nieuwe) versie van de standaard of dat er sprake is van nieuwe / gewijzigde regels waar aktie op moet worden ondernomen om compliant te blijven aan deze nieuwe versie.

De beschreven methodiek is van toepassing op de standaarden die Logius in beheer heeft. In de tekst worden Digikoppeling standaarden als voorbeeld aangehaald maar semantische versienummering is ook op de andere standaarden van toepassing.

## Versioneringsmethodiek
Per document wordt met `[documentnaam] X.Y.Z` de versie aangegeven.
Met `X.Y.Z` wordt gerefereerd aan major (X) en minor (Y) releases en (Z) patches,
dit wordt hieronder toegelicht.

* PATCH wordt verhoogd bij correcties.
* MINOR wordt verhoogd bij wijzigingen waarbij uitwerkingen (implementaties) volgens de vorige versie van de standaard ook voldoen aan de normen/eisen van de nieuwe versie van de standaard.
* MAJOR wordt verhoogd als de nieuwe versie van de standaard zodanig wijzigt dat uitwerkingen (implementaties) volgens de vorige versie van de standaard niet meer voldoen aan de normen/eisen van de nieuwe versie van de standaard.

### Patch Releases
In een patchrelease worden wijzigingen doorgevoerd die de technische
specificatie niet raken. Dit kunnen tekstuele wijzigingen zijn of
inhoudelijke indelingen van de documenten. De wijzigingen worden
vastgelegd in release notes. Een patch releases wordt door de beheerder
op eigen initiatief of op aanwijzingen van gebruikers doorgevoerd en gepubliceerd.
Een patchrelease wordt aan het Technisch Overleg ter kennisgeving medegedeeld.
Een nieuwe patchrelease vervangt een eerdere versie in zijn geheel.

### Minor releases
Een minor release geeft aan dat de nieuwe versie van de standaard zodanig is gewijzigd dat een implementatie van de voorgaande versie van de standaard voldoet aan de regels van de nieuwe versie. In een minor release kunnen wijzigingen doorgevoerd worden die de technische
specificatie van een koppelvlak raken (bijvoorbeeld nieuwe functionaliteit). 
Voor Minor Releases wordt een uitgebreid vaststellingsprocedure gevolgd
(conform het beheermodel van de standaard) en er kan in overleg met de deelnemers
van het Technisch Overleg tot een migratiepad worden besloten. Dit migratiepad
wordt in de release meegenomen.

### Major Releases
Een major release geeft aan dat de nieuwe versie van de standaard zodanig is gewijzigd dat een implementatie van de voorgaande versie van de standaard **niet** voldoet aan de regels van de nieuwe versie.
Bijvoorbeeld de overgang naar nieuwe externe
(meestal internationale) standaarden binnen een bestaand profiel. Als hierbij het
functionele toepassingsgebied van de standaard, waarvoor het pas-toe-of-leg-uit
regime geldt, verandert, dan wordt eerst de uitgebreide vaststellingsprocedure
gevolgd en vervolgens de procedure van het Forum Standaardisatie.

<aside class="example" title="Grote wijzigingen voor Digikoppeling">
Bij de overgang naar een andere externe standaard binnen een bestaand
profiel kan men denken aan een overgang naar HTTP 2.0 of SOAP 1.2 binnen
Digikoppeling WUS koppelvlakspecificatie.
Het toevoegen van een geheel nieuw profiel kan voor Digikoppeling kan bestaan
uit het toevoegen van een Grote Berichten Push variant of ebMS3/AS4
koppelvlakspecificaties. Deze kunnen natuurlijk bestaande koppelvlakspecificaties
vervangen.
</aside>

## Toelichting en voorbeeld regels
Een  versie van een standaard (versie 1.2.0) is compatible met een eerdere versie van een standaard (versie 1.1.0) als uitwerkingen/ implementaties volgens de eerdere versie 1.1.0 ook volledig voldoen aan de normen en eisen van versie 1.2.0 .
Wijzigingen in de standaard kunnen impact hebben op de technische werking van implementaties en/of op afspraken die de technische werking van implementaties niet raken bijvoorbeeld organisatorische of proces afspraken;

Voor standaarden is relevant of een realisatie volgens de oude versie van een standaard wel of niet voldoet aan de nieuwe versie van de standaard;

Voor standaarden waarbij wijzigingen op onderdelen kan verschillen tussen major en minor kan een impactmatrix opgesteld worden waarmee impact op de onderdelen gespecificeerd kan worden.

## Versie overgangen

Wanneer een nieuwe major versie uitkomt zal de oude versie conform de afgestemde migratiepad een einddatum van geldigheid krijgen. In de overgangsperiode kunnen dus meerdere versies gepubliceerd zijn en de status geldig hebben.

Om te kunnen werken aan publicatie-, werk- en voorstelversies van documenten worden Git branches gebruikt.

<aside class="example">
In het onderstaande voorbeeld zien wij een standaard van 1.0.0 naar 1.1.0 ontwikkelen.

<figure id="Gitflow">
  <img src="images/Semver_gitflow_branches.svg" alt="Weergave van splitsende braches" />
  <figcaption>Gitflow</figcaption>
</figure>

De branch main is de huidig gepubliceerde versie en de branch develop is de werkversie. Dit wordt als documentstatus aangegeven. In de main branch staat dus een _vastgestelde versie_. Het uitwerken van een RFC gebeurt in een afsplitsing van de develop branch waarna het terug de develop branch invloeit. In het voorbeeld schema leidde RFC1 tot de eerste release candidate (rc) van versie 1.1.0 van de standaard. Wanneer de werkversie gereed en akkoord is als release stromen de wijzigingen naar de branch main. Na overgang van de develop branch naar de gepubliceerde main branch moet de status van het document worden aangepast in de main branch.

Het kan voorkomen dat gewenst wordt vlug een kleine (niet inhoudelijke) aanpassing aan de gepubliceerde versie te maken. Om bijvoorbeeld een spelfout vlug te corrigeren kan deze aanpassing op main i.p.v. develop worden uitgevoerd. In het voorbeeld leidde een hotfix tot een release van versie 1.0.1 waarna de aanpassing naar de werkversie geduwd wordt.
</aside>
