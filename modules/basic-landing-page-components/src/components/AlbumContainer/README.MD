Album Container:

```jsx
import { AlbumCard } from "../AlbumCard";
import { AlbumCardBody } from "../AlbumCardBody";
import { AlbumCardText } from "../AlbumCardText";
import { PlaceHolder } from "@idahoedokpayi/basic-landing-page-svg";
<AlbumContainer>
  <div className="col-md-4">
    <AlbumCard>
      <PlaceHolder
        width="100%"
        height="225"
        className="bd-placeholder-img card-img-top"
        text="Thumbnail"
      />
      <AlbumCardBody>
        <AlbumCardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </AlbumCardText>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </AlbumCardBody>
    </AlbumCard>
  </div>
</AlbumContainer>;
```
