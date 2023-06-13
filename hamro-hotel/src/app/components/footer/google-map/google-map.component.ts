import { Component, OnInit, Renderer2 } from '@angular/core';
import { GoogleMapsService } from '../../../services/google-map-service';

// declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private googleMapsService: GoogleMapsService
  ) { }

  ngOnInit(): void {
    this.loadGoogleMapsScript();
  }

  loadGoogleMapsScript(): void {
    const apiKey = this.googleMapsService.getApiKey();
    const script = this.renderer.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.onload = () => {
      this.initializeMap();
    };
    this.renderer.appendChild(document.head, script);
  }

  initializeMap(): void {
    const nagarkot = new google.maps.LatLng(27.7172, 85.5162);
    const mapOptions = {
      center: nagarkot,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const marker = new google.maps.Marker({
      position: nagarkot,
      map: map,
      title: 'Nagarkot'
    });
  }
}
