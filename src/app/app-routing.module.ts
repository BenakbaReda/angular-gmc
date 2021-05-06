import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessingThePropertiesOfComponent } from './AccessingThePropertiesOf/accessing-the-properties-of/accessing-the-properties-of.component';
import { ActivateActualRouteCheckpComponent } from './ActivateActualRouteCheckp/activate-actual-route-checkp/activate-actual-route-checkp.component';
import { AddTheTokenToTheRequestComponent } from './AddTheTokenToTheRequest/add-the-token-to-the-request/add-the-token-to-the-request.component';
import { AsyncpipeComponent } from './Asyncpipe/asyncpipe/asyncpipe.component';
import { AttributeDirectivesNgClasComponent } from './AttributeDirectivesNgClas/attribute-directives-ng-clas/attribute-directives-ng-clas.component';
import { AttributeDirectivesNgStylComponent } from './AttributeDirectivesNgStyl/attribute-directives-ng-styl/attribute-directives-ng-styl.component';
import { ChildrenRouteComponent } from './ChildrenRoute/children-route/children-route.component';
import { ComponentsComponent } from './Components/components/components.component';
import { DetailleCvComponent } from './Components/detaille-cv/detaille-cv.component';
import { ItemCvComponent } from './Components/item-cv/item-cv.component';
import { CustomizeADirectiveAttribComponent } from './CustomizeADirectiveAttrib/customize-adirective-attrib/customize-adirective-attrib.component';
import { DiComponent } from './Di/di/di.component';
import { EventBindingComponent } from './EventBinding/event-binding/event-binding.component';
import { GroupingFormComponent } from './GroupingForm/grouping-form/grouping-form.component';
import { GuardComponent } from './Guard/guard/guard.component';
import { InjectingAServiceiComponent } from './InjectingAServicei/injecting-aservicei/injecting-aservicei.component';
import { InteractionDadAndSonComponent } from './InteractionDadAndSon/interaction-dad-and-son/interaction-dad-and-son.component';
import { InteractionSonAndDadComponent } from './InteractionSonAndDad/interaction-son-and-dad/interaction-son-and-dad.component';
import { InterceptorsComponent } from './Interceptors/interceptors/interceptors.component';
import { MinimalistSyntaxOfARouteComponent } from './MinimalistSyntaxOfARoute/minimalist-syntax-of-aroute/minimalist-syntax-of-aroute.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { ProjectRestApiComponent } from './ProjectRestApi/project-rest-api/project-rest-api.component';
import { RetrieveTheParametersComponent } from './RetrieveTheParameters/retrieve-the-parameters/retrieve-the-parameters.component';
import { RoutingComponent } from './Routing/routing/routing.component';
import { StructuralDirectivesNgforComponent } from './StructuralDirectivesNgfor/structural-directives-ngfor/structural-directives-ngfor.component';
import { StructuralDirectivesNgifComponent } from './StructuralDirectivesNgif/structural-directives-ngif/structural-directives-ngif.component';
import { SubjectsComponent } from './Subjects/subjects/subjects.component';
import { TriggerARouteComponent } from './TriggerARoute/trigger-aroute/trigger-aroute.component';
import { TwoWayDataBindingComponent } from './TwoWayDataBinding/two-way-data-binding/two-way-data-binding.component';
import { ValidationComponent } from './Validation/validation/validation.component';

 

const routes: Routes = [
  {path:'EventBinding', 				component :  EventBindingComponent}, 				
  {path:'TwoWayDataBinding', 			component :  TwoWayDataBindingComponent}, 			
  {path:'InteractionDadAndSon', 		component :  InteractionDadAndSonComponent}, 				
  {path:'Components', 			      	component :  ComponentsComponent}, 				                                               
  {path:'InteractionSonAndDad', 		component :  InteractionSonAndDadComponent}, 		
  {path:'AttributeDirectivesNgStyl', 	component :  AttributeDirectivesNgStylComponent}, 	
  {path:'AttributeDirectivesNgClas', 	component :  AttributeDirectivesNgClasComponent}, 	
  {path:'CustomizeADirectiveAttrib', 	component :  CustomizeADirectiveAttribComponent}, 	
  {path:'StructuralDirectivesNgif', 	component :  StructuralDirectivesNgifComponent}, 	
  {path:'StructuralDirectivesNgfor', component :  StructuralDirectivesNgforComponent}, 
  {path:'Pipes', 						component :  PipesComponent}, 						
  {path:'Di', 						component :  DiComponent}, 						
  {path:'InjectingAServicei', 		component :  InjectingAServiceiComponent}, 		
  {path:'MinimalistSyntaxOfARoute', 	component :  MinimalistSyntaxOfARouteComponent}, 	
  {path:'ActivateActualRouteCheckp', 	component :  ActivateActualRouteCheckpComponent}, 	
  {path:'TriggerARoute', 				component :  TriggerARouteComponent}, 				
  {path:'RetrieveTheParameters', 		component :  RetrieveTheParametersComponent}, 		
  {path:'ChildrenRoute', 				component :  ChildrenRouteComponent}, 				
  {path:'Routing', 					component :  RoutingComponent}, 					
  {path:'Validation', 				component :  ValidationComponent}, 				
  {path:'AccessingThePropertiesOf', 	component :  AccessingThePropertiesOfComponent}, 	
  {path:'GroupingForm', 				component :  GroupingFormComponent}, 				
  {path:'Asyncpipe', 					component :  AsyncpipeComponent}, 					
  {path:'Subjects', 					component :  SubjectsComponent}, 					
  {path:'ProjectRestApi', 			component :  ProjectRestApiComponent}, 			
  {path:'AddTheTokenToTheRequest', 	component :  AddTheTokenToTheRequestComponent}, 	
  {path:'Guard', 						component :  GuardComponent}, 						
  {path:'Interceptors', 				component :  InterceptorsComponent} ,
  {path:'DetailleCv/:id', 				component : DetailleCvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
