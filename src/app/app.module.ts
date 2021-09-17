import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componants/header/header.component';
import { FiltresComponent } from './componants/filtres/filtres.component';
import { TotalGlobaleComponent } from './componants/total-globale/total-globale.component';
import { GraphTotalComponent } from './componants/graph-total/graph-total.component';
import { RecurrenceCommandeComponent } from './componants/recurrence-commande/recurrence-commande.component';
import { CamembertPourcentageComponent } from './componants/camembert-pourcentage/camembert-pourcentage.component';
import { GraphProduitsComponent } from './componants/graph-produits/graph-produits.component';
import { MenuComponent } from './componants/menu/menu.component';
import { DashBoardComponent } from './views/dash-board/dash-board.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgChartsModule} from "ng2-charts";
import {GraphiqueComponent} from "./componants/graphique/graphique/graphique.component";
import { ErrorFormComponent } from './componants/error-form/error-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltresComponent,
    TotalGlobaleComponent,
    GraphTotalComponent,
    RecurrenceCommandeComponent,
    CamembertPourcentageComponent,
    GraphProduitsComponent,
    MenuComponent,
    DashBoardComponent,
    AuthViewComponent,
    GraphiqueComponent,
    ErrorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
