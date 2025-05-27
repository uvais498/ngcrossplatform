import {
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ItemService, Item } from '../../core/services/item.service';
import { Dialogs } from '@nativescript/core/ui/dialogs';

@Component({
  selector: 'ns-detail',
  templateUrl: './detail.component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DetailComponent implements OnInit {
  itemService = inject(ItemService);
  route = inject(ActivatedRoute);
  item = signal<Item>(null);

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.item.set(this.itemService.getItem(id));

    // log the item to the console
    console.log(this.item());
  }

  showPrompt() {
  Dialogs.prompt({
    title: 'Prompt!',
    message: 'Enter the name of this framework:',
    defaultText: 'NativeScript',
    okButtonText: 'OK',
    neutralButtonText: 'Cancel',
    // cancelable: true,
    // cancelButtonText: 'Cancel',
    // capitalizationType: 'none',
    // inputType: 'email',
  }).then((result) => {
    console.log(result)
  })
}
}
