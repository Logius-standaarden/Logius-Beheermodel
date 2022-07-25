# Bijlage X: Versionering van de documenten

Deze bijlage beschrijft de versioneringsmethodiek ofwel de standaard manier om om te gaan met versienummers van de standaard. De versioneringsmethodiek is gelijk voor alle 'gepubliceerde standaarden' die onder beheer zijn van de Logius (afdeling standaarden) en is gebaseerd op Semver. Semver staat voor Semantisch Versioneren en we gebruiken versie 2.0.0  van de standaard zoals gepubliceerd op [semver.org](https://semver.org/lang/nl/#semantisch-versioneren-200).

## Versioneringsmethodiek

Per document wordt met `[documentnaam]_vX.Y.Z` de versie aangegeven. Met `vX.Y.Z` wordt gerefereerd aan major (X) en minor (Y) releases en (Z) patches, dit wordt hieronder toegelicht:

## Patch Releases

In een patchrelease worden wijzigingen doorgevoerd die de technische specificatie niet raken. Dit kunnen tekstuele wijzigen zijn of inhoudelijke indelingen van de standaard. De wijzigen worden vastgelegd in release notes. Een patch releases wordt door de beheerder op eigen initiatief of op aanwijzingen van gebruikers doorgevoerd en gepubliceerd. Een patchrelease wordt aan de Technische Architectuurgroep ter kennisgeving medegedeeld. Een nieuwe patchrelease vervangt een eerdere versie in zijn geheel.

## Minor releases

In een minor release kunnen wijzigingen doorgevoerd worden die de technische specificatie  raken. Dat kunnen fouten zijn in de specificatie zijn, het verzwaren of verlichten van een restrictie of het een aanpassing van een beveiligingstandaard (zoals TLS 1.2 naar TLS 1.3). In de SEMVER aanpak zijn minor releases backwards compatible. Voor een standaard is backwards compatibility lastiger te bepalen omdat uiteindelijk twee partijen met elkaar moeten meebewegen. *Het is de intentie dat Minor Releases niet backwards incompatible zijn*. Voor Minor Releases wordt een uitgebreid vaststellings-procedure gevolgd conform het  beheermodel en er kan in overleg met de stakeholders tot een migratiepad worden besloten. Dit migratiepad wordt in de release meegenomen.

## Major Releases

Er zijn twee Major release momenten: de overgang naar nieuwe internationale standaarden binnen een bestaand profiel, bijvoorbeeld HTTP 2.0 of  de toevoeging van een geheel nieuwe regel of profiel binnen de standaard. In het eerste geval komt er een nieuw major versie van de standaard om vast te stellen volgens het de reguliere vaststellingsprocedure (conform het  Beheermodel). In het tweede geval wordt er een *nieuw document* of *nieuwe sectie* toegevoegd aan de standaard. 

Als hierbij het functionele toepassingsgebied van de standaard, waarvoor het pas toe of leg uit regime geldt, veranderd, dan wordt eerst de uitgebreide vaststellingsprocedure gevolgd en vervolgens de procedure van het Forum Standaardisatie.

## Toelichting en voorbeeld regels
Een  versie van een standaard (versie 1.2.0) is compatible met een eerdere versie van een standaard (versie 1.1.0) als uitwerkingen/ implementaties volgens de eerdere versie 1.1.0 ook volledig voldoen aan de normen en eisen van versie 1.2.0 .
> Wijzigingen in de standaard kunnen impact hebben op de technische werking van implementaties en/of op afspraken die de technische werking van implementaties niet raken bv organisatorische of proces afspraken;

Voor standaarden is relevant of een realisatie volgens de oude versie van een standaard wel of niet voldoet aan de nieuwe versie van de standaard:

Globale regels voor het bepalen van de impact op de versionering:

- Toevoegen = Major
- Wijzingen :
	- Versoepeling = Minor
	- Verscherping = Major
- Verwijderen = Minor
- Correctie = Patch

## Versie overgangen

Wanneer een nieuwe major versie uitkomt zal de oude versie conform de afgestemde migratiepad een einddatum van geldigheid krijgen. In de overgangsperiode kunnen dus meerdere versies gepubliceerd zijn en de status geldig hebben.

Om te kunnen werken aan publicatie-, werk- en voorstelversies van documenten worden Git branches gebruikt.

Voorbeeld
In het onderstaande voorbeeld zien wij een standaard van 1.0.0 naar 1.1.0 ontwikkelen.



![Gitflow](media/Semver_gitflow_branches.svg "Gitflow")



De branch main is de huidig gepubliceerde versie en de branch develop is de werkversie. Het uitwerken van een RFC gebeurt in een afsplitsing van de develop branch waarna het terug de develop branch invloeit. In het voorbeeld schema leidde RFC1 tot de eerste release candidate (rc) van versie 1.1.0 van de standaard. Wanneer de werkversie gereed en akkoord is als release stromen de wijzigingen naar de branch main.

Het kan voorkomen dat gewenst wordt vlug een kleine (niet inhoudelijke) aanpassing aan de gepubliceerde versie te maken. Om bijvoorbeeld een spelfout vlug te corrigeren kan deze aanpassing op main i.p.v. develop worden uitgevoerd. In het voorbeeld leidde een hotfix tot een release van versie 1.0.1 waarna de aanpassing naar de werkversie geduwd wordt.
