The solution is to move the usage of `useParams()` into the component that is directly rendered by a `<Route>` component.

**Incorrect (useParamsError.js):**
```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // ...
}

function ParentComponent() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

**Correct (useParamsSolution.js):**
```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // ...
}

function ParentComponent() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}/>
    </Routes> 
  );
}
```