---
layout: page
---


Módulo: Session
===============

Gestiona los datos de la sesión del usuario, sus credenciales de sesión y el estado global de la aplicación.

```javascript
// Storages data in user session
var data = {key: 'value'};
app.session.set('key', data);

// Retrieve data from user session
var data = app.session.get('key', data);
// data = {key: 'value'};

// Destroy session
app.session.destroy();

/**
 * Ask for user autorization
 * return boolean object
 */
app.session.gatekeeper(); 

/**
 * Set an application status
 * @param {string} status - Name of the status
 * @param {boolean} active - true if active, false id disabled
 */
app.session.setStatus('new-user', true); 

// Remove a specific status
app.session.removeStatus('new-user');

// Create a logged session, this method are called
// automatically with app.user.login success
app.session.logged({
	access:token: 'token',
	oauthService: 'silkroad', 	// silkroad|facebook|google
	user: user					// user object
	persistent: false			// persistent session (login with remember)
});
```