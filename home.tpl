% include('header.tpl', title=name)

<div class="container">
    <div class="row">

        % for item in items:
            <div class="col-lg-3 col-md-4 col-xs-6 mb-4">
                <div class="card">
                    <img class="card-img-top"
                         src="https://whbootletube.s3.amazonaws.com/{{item.get('filename')}}"
                         alt="{{item.get('category')}}">
                    <div class="card-body">
                        <h5 class="card-title" align="center">{{item.get('category')}}</h5></p>
                    </div>
                </div>
            </div>
        % end

    </div>
</div>

<div class="container mb-4 text-center">
    <a class="btn btn-primary btn-lg active" href="/upload">Upload new image</a>
</div>

% include('footer.tpl')
