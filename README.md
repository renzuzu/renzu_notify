# renzu_notify
FIVEM Simple Notify System using polipop notify
- SAMPLE USAGE
```
    option = {
        icons = true, -- show or hide icons default true
        pool = 0, -- Default: 0 Limits the number of concurrent notification elements that can be rendered within the notifications container at any given time. A value of 0 means that there is no limit.
        sticky = true, -- Default: false A boolean designating whether the notification elements should be removed automatically when they expire or whether they should stay in the DOM until they are removed manually.
        pauseOnHover = true, -- Default: true A boolean designating whether the notifications expiration control should pause when hovering over the wrapper element. Can only be set on class instantiation.
        life = 4000, -- Default: 3000 Expiration time for non-sticky notification elements in milliseconds.
        progressbar = true, -- A boolean designating whether the life time progress bar will be displayed for each notification element
        effect = 'slide', -- The animation effect when adding or removing notification elements. Accepted values: fade or slide.
        easing = 'ease-in-out', -- linear, ease, ease-in, ease-out, ease-in-out or a custom cubic-bezier value.
    }
    --SendNUIMessage({notify = true, title = 'Hello There', type = "success", message = 'This is a Message', options = option})
    TriggerEvent('renzu_notify:Notify','success','Hello There', 'Your Brain is now Functional', option)
    TriggerEvent('renzu_notify:Notify','info','Loading..', 'We are now Downloading your New Brain', option)
    TriggerEvent('renzu_notify:Notify','error','Oh no!', 'There is Problem with your brain', option)
    TriggerEvent('renzu_notify:Notify','warning','Whats happening?', 'i think there is a problem with my Brain', option)
    TriggerEvent('renzu_notify:Notify','default','Renzu Notify', 'This is a Free Notify Available at Github', option)
```
- Without Options: (will use config)
```
TriggerEvent('renzu_notify:Notify','default','Renzu Notify', 'This is a Free Notify Available at Github')
```
# Preview

![image](https://user-images.githubusercontent.com/82306584/128595924-2403cab8-e499-4601-a08d-5cb22f649cfd.png)


# Copyright
https://github.com/minitek/polipop

